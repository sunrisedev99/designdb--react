import React, { useState, createContext, useEffect } from "react";
import Sidebar from "../components/sidebar";
import ControlPanel from "../components/control_panel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Canvas from "../components/canvas";
import EditorPanel from "../components/editor_panel";
import {
  Tab,
  defaultTableTheme,
  defaultNoteTheme,
  Action,
  ObjectType,
} from "../data/data";

export const LayoutContext = createContext();
export const TableContext = createContext();
export const AreaContext = createContext();
export const TabContext = createContext();
export const NoteContext = createContext();
export const SettingsContext = createContext();
export const UndoRedoContext = createContext();

export default function Editor(props) {
  const [code, setCode] = useState("");
  const [tables, setTables] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [areas, setAreas] = useState([]);
  const [notes, setNotes] = useState([]);
  const [resize, setResize] = useState(false);
  const [width, setWidth] = useState(340);
  const [selectedTable, setSelectedTable] = useState("");
  const [tab, setTab] = useState(Tab.tables);
  const [layout, setLayout] = useState({
    header: true,
    sidebar: true,
    services: true,
    tables: true,
    areas: true,
    relationships: true,
    issues: true,
    editor: true,
    notes: true,
    fullscreen: false,
  });
  const [settings, setSettings] = useState({
    strictMode: false,
    showFieldSummary: true,
    zoom: 1,
    pan: { x: 0, y: 0 },
    showGrid: true,
  });
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const dragHandler = (e) => {
    if (!resize) return;
    const w = e.clientX;
    if (w > 340) setWidth(w);
  };

  const addTable = (addToHistory = true, data) => {
    if (data) {
      setTables((prev) => {
        const temp = prev.slice();
        temp.splice(data.id, 0, data);
        return temp.map((t, i) => ({ ...t, id: i }));
      });
    } else {
      setTables((prev) => [
        ...prev,
        {
          id: prev.length,
          name: `table_${prev.length}`,
          x: -settings.pan.x,
          y: -settings.pan.y,
          fields: [
            {
              name: "id",
              type: "UUID",
              default: "",
              check: "",
              primary: true,
              unique: true,
              notNull: true,
              increment: true,
              comment: "",
              id: 0,
            },
          ],
          comment: "",
          indices: [],
          color: defaultTableTheme,
        },
      ]);
    }
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.ADD,
          element: ObjectType.TABLE,
        },
      ]);
      setRedoStack([]);
    }
  };

  const updateField = (tid, fid, updatedValues) => {
    setTables((prev) =>
      prev.map((table, i) => {
        if (tid === i) {
          return {
            ...table,
            fields: table.fields.map((field, j) =>
              fid === j ? { ...field, ...updatedValues } : field
            ),
          };
        }
        return table;
      })
    );
  };

  const addArea = (addToHistory = true, data) => {
    if (data) {
      setAreas((prev) => {
        const temp = prev.slice();
        temp.splice(data.id, 0, data);
        return temp.map((t, i) => ({ ...t, id: i }));
      });
    } else {
      setAreas((prev) => [
        ...prev,
        {
          id: prev.length,
          name: `area_${prev.length}`,
          x: -settings.pan.x,
          y: -settings.pan.y,
          width: 200,
          height: 200,
          color: defaultTableTheme,
        },
      ]);
    }
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.ADD,
          element: ObjectType.AREA,
        },
      ]);
      setRedoStack([]);
    }
  };

  const addNote = (addToHistory = true, data) => {
    if (data) {
      setNotes((prev) => {
        const temp = prev.slice();
        temp.splice(data.id, 0, data);
        return temp.map((t, i) => ({ ...t, id: i }));
      });
    } else {
      setNotes((prev) => [
        ...prev,
        {
          id: prev.length,
          x: -settings.pan.x,
          y: -settings.pan.y,
          title: `note_${prev.length}`,
          content: "",
          color: defaultNoteTheme,
          height: 88,
        },
      ]);
    }
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.ADD,
          element: ObjectType.NOTE,
        },
      ]);
      setRedoStack([]);
    }
  };

  const addRelationship = (addToHistory = true, data) => {
    if (addToHistory) {
      setRelationships((prev) => {
        setUndoStack((prevUndo) => [
          ...prevUndo,
          {
            action: Action.ADD,
            element: ObjectType.RELATIONSHIP,
            data: data,
          },
        ]);
        setRedoStack([]);
        return [...prev, data];
      });
    } else {
      setRelationships((prev) => {
        const temp = prev.slice();
        temp.splice(data.id, 0, data);
        return temp.map((t, i) => ({ ...t, id: i }));
      });
    }
  };

  const moveTable = (id, x, y) => {
    setTables((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          setRelationships((prev) =>
            prev.map((r) => {
              if (r.startTableId === id) {
                return {
                  ...r,
                  startX: x + 15,
                  startY: y + r.startFieldId * 36 + 69,
                };
              } else if (r.endTableId === id) {
                return {
                  ...r,
                  endX: x + 15,
                  endY: y + r.endFieldId * 36 + 69,
                };
              }
              return r;
            })
          );
          return {
            ...t,
            x: x,
            y: y,
          };
        }
        return t;
      })
    );
  };

  const moveArea = (id, x, y) => {
    setAreas((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            x: x,
            y: y,
          };
        }
        return t;
      })
    );
  };

  const moveNote = (id, x, y) => {
    setNotes((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            x: x,
            y: y,
          };
        }
        return t;
      })
    );
  };

  const deleteTable = (id, addToHistory = true) => {
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.DELETE,
          element: ObjectType.TABLE,
          data: tables[id],
        },
      ]);
      setRedoStack([]);
    }
    setTables((prev) =>
      prev.filter((e) => e.id !== id).map((e, i) => ({ ...e, id: i }))
    );
  };

  const deleteArea = (id, addToHistory = true) => {
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.DELETE,
          element: ObjectType.AREA,
          data: areas[id],
        },
      ]);
      setRedoStack([]);
    }
    setAreas((prev) =>
      prev.filter((e) => e.id !== id).map((e, i) => ({ ...e, id: i }))
    );
  };

  const deleteNote = (id, addToHistory = true) => {
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.DELETE,
          element: ObjectType.NOTE,
          data: notes[id],
        },
      ]);
      setRedoStack([]);
    }
    setNotes((prev) =>
      prev.filter((e) => e.id !== id).map((e, i) => ({ ...e, id: i }))
    );
  };

  const deleteRelationship = (id, addToHistory = true) => {
    if (addToHistory) {
      setUndoStack((prev) => [
        ...prev,
        {
          action: Action.DELETE,
          element: ObjectType.RELATIONSHIP,
          data: relationships[id],
        },
      ]);
      setRedoStack([]);
    }
    setRelationships((prev) =>
      prev.filter((e) => e.id !== id).map((e, i) => ({ ...e, id: i }))
    );
  };

  const editNote = (id, values, addToHistory = true) => {
    setNotes((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            ...values,
          };
        }
        return t;
      })
    );
  };

  useEffect(() => {
    document.title = "Editor - drawDB";
  }, []);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <TableContext.Provider
        value={{
          tables,
          setTables,
          addTable,
          moveTable,
          updateField,
          deleteTable,
          relationships,
          setRelationships,
          addRelationship,
          deleteRelationship,
        }}
      >
        <AreaContext.Provider
          value={{ areas, setAreas, moveArea, addArea, deleteArea }}
        >
          <NoteContext.Provider
            value={{ notes, setNotes, moveNote, addNote, deleteNote, editNote }}
          >
            <TabContext.Provider value={{ tab, setTab }}>
              <SettingsContext.Provider value={{ settings, setSettings }}>
                <UndoRedoContext.Provider
                  value={{ undoStack, redoStack, setUndoStack, setRedoStack }}
                >
                  <div className="h-[100vh] overflow-hidden">
                    <ControlPanel />
                    <div
                      className={
                        layout.header
                          ? `flex h-[calc(100vh-123.93px)]`
                          : `flex h-[calc(100vh-51.97px)]`
                      }
                      onMouseUp={() => setResize(false)}
                      onMouseMove={dragHandler}
                    >
                      <DndProvider backend={HTML5Backend}>
                        {layout.sidebar && (
                          <EditorPanel
                            code={code}
                            setCode={setCode}
                            resize={resize}
                            setResize={setResize}
                            width={width}
                            selectedTable={selectedTable}
                            setSelectedTable={setSelectedTable}
                          />
                        )}
                        <Canvas
                          code={code}
                          setCode={setCode}
                          selectedTable={selectedTable}
                          setSelectedTable={setSelectedTable}
                        />
                      </DndProvider>
                      {layout.services && <Sidebar />}
                    </div>
                  </div>
                </UndoRedoContext.Provider>
              </SettingsContext.Provider>
            </TabContext.Provider>
          </NoteContext.Provider>
        </AreaContext.Provider>
      </TableContext.Provider>
    </LayoutContext.Provider>
  );
}
