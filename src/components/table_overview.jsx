import { React, useContext, useState, useRef } from "react";
import {
  Action,
  ObjectType,
  defaultTableTheme,
  sqlDataTypes,
  tableThemes,
} from "../data/data";
import {
  Collapse,
  Row,
  Col,
  Input,
  Form,
  Button,
  Card,
  Popover,
  Checkbox,
  Select,
  AutoComplete,
  Toast,
  Empty,
} from "@douyinfe/semi-ui";
import {
  IconMore,
  IconKeyStroked,
  IconDeleteStroked,
  IconCheckboxTick,
  IconPlus,
  IconSearch,
} from "@douyinfe/semi-icons";
import {
  IllustrationNoContent,
  IllustrationNoContentDark,
} from "@douyinfe/semi-illustrations";
import { TableContext, UndoRedoContext } from "../pages/editor";

export default function TableOverview(props) {
  const [indexActiveKey, setIndexActiveKey] = useState("");
  const [value, setValue] = useState("");
  const { tables, setTables, addTable, deleteTable } = useContext(TableContext);
  const { setUndoStack, setRedoStack } = useContext(UndoRedoContext);
  const [editField, setEditField] = useState({});
  const selectRef = useRef(null);
  const [filteredResult, setFilteredResult] = useState(
    tables.map((t) => {
      return t.name;
    })
  );

  const handleStringSearch = (value) => {
    setFilteredResult(
      tables
        .map((t) => {
          return t.name;
        })
        .filter((i) => i.includes(value))
    );
  };

  const updatedField = (tid, fid, updatedValues) => {
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

  const updateTable = (tid, updatedValues) => {
    setTables((prev) =>
      prev.map((table, i) => {
        if (tid === i) {
          return {
            ...table,
            ...updatedValues,
          };
        }
        return table;
      })
    );
  };

  return (
    <>
      <Row gutter={6}>
        <Col span={16}>
          <AutoComplete
            data={filteredResult}
            value={value}
            showClear
            prefix={<IconSearch />}
            placeholder="Search..."
            emptyContent={<div className="p-3">No tables found</div>}
            onSearch={(v) => handleStringSearch(v)}
            onChange={(v) => setValue(v)}
            onSelect={(v) => {
              const { id } = tables.find((t) => t.name === v);
              props.setSelectedTable(`${id}`);
              document
                .getElementById(`scroll_table_${id}`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full"
          />
        </Col>
        <Col span={8}>
          <Button icon={<IconPlus />} block onClick={() => addTable(true)}>
            Add table
          </Button>
        </Col>
      </Row>
      <Collapse
        activeKey={props.selectedTable}
        onChange={(k) => props.setSelectedTable(k)}
        accordion
      >
        {tables.length <= 0 ? (
          <div className="select-none">
            <Empty
              image={
                <IllustrationNoContent style={{ width: 160, height: 160 }} />
              }
              darkModeImage={
                <IllustrationNoContentDark
                  style={{ width: 160, height: 160 }}
                />
              }
              title="No tables"
              description="Start building your diagram!"
            />
          </div>
        ) : (
          tables.map((t, i) => (
            <div id={`scroll_table_${t.id}`} key={t.id}>
              <Collapse.Panel header={<div>{t.name}</div>} itemKey={`${t.id}`}>
                {t.fields.map((f, j) => (
                    <Row
                      type="flex"
                      justify="start"
                      align="middle"
                      gutter={6}
                      className="hover:bg-slate-100"
                    >
                      <Col span={7}>
                        <Input
                          field="name"
                          value={f.name}
                          className="m-0"
                          placeholder="Name"
                          onChange={(value) =>
                            updatedField(i, j, { name: value })
                          }
                          onFocus={(e) =>
                            setEditField({
                              tid: i,
                              fid: j,
                              values: { name: e.target.value },
                            })
                          }
                          onBlur={(e) => {
                            if (e.target.value === editField.name) return;
                            setUndoStack((prev) => [
                              ...prev,
                              {
                                action: Action.EDIT,
                                element: ObjectType.TABLE,
                                component: "field",
                                data: {
                                  undo: editField,
                                  redo: {
                                    tid: i,
                                    fid: j,
                                    values: { name: e.target.value },
                                  },
                                },
                              },
                            ]);
                            setRedoStack([]);
                            setEditField({});
                          }}
                        />
                      </Col>
                      <Col span={8}>
                        <Select
                          className="w-full"
                          optionList={sqlDataTypes.map((value, index) => {
                            return {
                              label: value,
                              value: value,
                            };
                          })}
                          filter
                          value={f.type}
                          ref={selectRef}
                          placeholder="Type"
                          onChange={(value) => {
                            updatedField(i, j, { type: value });
                            if (value === editField.type) return;
                            setUndoStack((prev) => [
                              ...prev,
                              {
                                action: Action.EDIT,
                                element: ObjectType.TABLE,
                                component: "field",
                                data: {
                                  undo: editField,
                                  redo: {
                                    tid: i,
                                    fid: j,
                                    values: { type: value },
                                  },
                                },
                              },
                            ]);
                            setRedoStack([]);
                            setEditField({});
                          }}
                          onFocus={() => {
                            setEditField({
                              tid: i,
                              fid: j,
                              values: { type: selectRef.current.props.value },
                            });
                          }}
                        ></Select>
                      </Col>
                      <Col span={3}>
                        <Button
                          type={f.notNull ? "primary" : "tertiary"}
                          title="Nullable"
                          theme={f.notNull ? "solid" : "light"}
                          onClick={() =>
                            updatedField(i, j, { notNull: !f.notNull })
                          }
                        >
                          ?
                        </Button>
                      </Col>
                      <Col span={3}>
                        <Button
                          type={f.primary ? "primary" : "tertiary"}
                          title="Primary"
                          theme={f.primary ? "solid" : "light"}
                          onClick={() =>
                            updatedField(i, j, { primary: !f.primary })
                          }
                          icon={<IconKeyStroked />}
                        ></Button>
                      </Col>
                      <Col span={3}>
                        <Popover
                          content={
                            <div className="px-1">
                              <Form
                                onChange={(value) =>
                                  updatedField(i, j, value.values)
                                }
                              >
                                <Form.Input
                                  field="default"
                                  label="Default"
                                  initValue={f.default}
                                  trigger="blur"
                                  placeholder="Set default"
                                />
                                <Form.Input
                                  field="check"
                                  label="Check Expression"
                                  trigger="blur"
                                  placeholder="Set constraint"
                                  initValue={f.check}
                                />
                                <div className="flex justify-between items-center my-3">
                                  <label
                                    htmlFor="unique"
                                    className="font-medium"
                                  >
                                    Unique
                                  </label>
                                  <Checkbox
                                    value="unique"
                                    defaultChecked={f.unique}
                                    onChange={(checkedValues) =>
                                      updatedField(i, j, {
                                        [checkedValues.target.value]:
                                          checkedValues.target.checked,
                                      })
                                    }
                                  ></Checkbox>
                                </div>
                                <div className="flex justify-between items-center my-3">
                                  <label
                                    htmlFor="increment"
                                    className="font-medium"
                                  >
                                    Autoincrement
                                  </label>
                                  <Checkbox
                                    value="increment"
                                    defaultChecked={f.increment}
                                    onChange={(checkedValues) =>
                                      updatedField(i, j, {
                                        [checkedValues.target.value]:
                                          checkedValues.target.checked,
                                      })
                                    }
                                  ></Checkbox>
                                </div>
                                <Form.TextArea
                                  field="comment"
                                  label="Comment"
                                  placeholder="Add comment"
                                  initValue={f.comment}
                                  autosize
                                  rows={2}
                                />
                              </Form>
                              <Button
                                icon={<IconDeleteStroked />}
                                type="danger"
                                block
                                onClick={(ev) => {
                                  setTables((prev) => {
                                    const updatedTables = [...prev];
                                    const updatedFields = [
                                      ...updatedTables[t.id].fields,
                                    ];
                                    updatedFields.splice(j, 1);
                                    updatedTables[t.id].fields = [
                                      ...updatedFields,
                                    ];
                                    return updatedTables;
                                  });
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          }
                          trigger="click"
                          position="rightTop"
                          showArrow
                        >
                          <Button type="tertiary" icon={<IconMore />}></Button>
                        </Popover>
                      </Col>
                    </Row>
            
                ))}
                {t.indices.length > 0 && (
                  <Card
                    bodyStyle={{ padding: "4px" }}
                    style={{ marginTop: "12px", marginBottom: "12px" }}
                    headerLine={false}
                  >
                    <Collapse
                      activeKey={indexActiveKey}
                      onChange={(itemKey) => setIndexActiveKey(itemKey)}
                      accordion
                    >
                      <Collapse.Panel header="Indices" itemKey="1">
                        {t.indices.map((idx, k) => (
                          <div
                            className="flex justify-between items-center mb-2"
                            key={k}
                          >
                            <Select
                              placeholder="Select fields"
                              multiple
                              optionList={t.fields.map((e) => ({
                                value: e.name,
                                label: e.name,
                              }))}
                              className="w-full"
                              defaultValue={idx.fields}
                              onChange={(value) => {
                                const updatedTables = [...tables];
                                const updatedIndices = [...t.indices];
                                updatedIndices[k] = {
                                  name: `${value.join("_")}_index`,
                                  fields: [...value],
                                };
                                updatedTables[i] = {
                                  ...t,
                                  indices: [...updatedIndices],
                                };
                                setTables(updatedTables);
                              }}
                            />
                            <Popover
                              content={
                                <div className="px-1">
                                  <Form>
                                    <Form.Input
                                      field="name"
                                      label="Name"
                                      initValue={idx.name}
                                      trigger="blur"
                                      placeholder="Index name"
                                    />
                                  </Form>
                                  <Button
                                    icon={<IconDeleteStroked />}
                                    type="danger"
                                    block
                                    onClick={() => {
                                      const updatedTables = [...tables];
                                      const updatedIndices = [...t.indices];
                                      updatedIndices.splice(k, 1);
                                      updatedTables[i] = {
                                        ...t,
                                        indices: [...updatedIndices],
                                      };
                                      setTables(updatedTables);
                                    }}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              }
                              trigger="click"
                              position="rightTop"
                              showArrow
                            >
                              <Button
                                icon={<IconMore />}
                                type="tertiary"
                                style={{ marginLeft: "12px" }}
                              ></Button>
                            </Popover>
                          </div>
                        ))}
                      </Collapse.Panel>
                    </Collapse>
                  </Card>
                )}
                <Card
                  bodyStyle={{ padding: "4px" }}
                  style={{ marginTop: "12px", marginBottom: "12px" }}
                  headerLine={false}
                >
                  <Collapse>
                    <Collapse.Panel header="Comment" itemKey="1">
                      <Form onChange={(value) => updateTable(i, value.values)}>
                        <Form.TextArea
                          field="comment"
                          noLabel={true}
                          showClear
                          onClear={() => updateTable(i, { comment: "" })}
                          initValue={t.comment}
                          autosize
                          placeholder="Add comment"
                          rows={1}
                        />
                      </Form>
                    </Collapse.Panel>
                  </Collapse>
                </Card>
                <Row gutter={6} className="mt-2">
                  <Col span={8}>
                    <Popover
                      content={
                        <div>
                          <div className="flex justify-between items-center p-2">
                            <div className="font-medium">Theme</div>
                            <Button
                              type="tertiary"
                              size="small"
                              onClick={() =>
                                updateTable(i, { color: defaultTableTheme })
                              }
                            >
                              Clear
                            </Button>
                          </div>
                          <hr />
                          <div className="py-3">
                            <div>
                              {tableThemes
                                .slice(0, Math.ceil(tableThemes.length / 2))
                                .map((c) => (
                                  <button
                                    key={c}
                                    style={{ backgroundColor: c }}
                                    className="p-3 rounded-full mx-1"
                                    onClick={() => updateTable(i, { color: c })}
                                  >
                                    {t.color === c ? (
                                      <IconCheckboxTick
                                        style={{ color: "white" }}
                                      />
                                    ) : (
                                      <IconCheckboxTick style={{ color: c }} />
                                    )}
                                  </button>
                                ))}
                            </div>
                            <div className="mt-3">
                              {tableThemes
                                .slice(Math.ceil(tableThemes.length / 2))
                                .map((c) => (
                                  <button
                                    key={c}
                                    style={{ backgroundColor: c }}
                                    className="p-3 rounded-full mx-1"
                                    onClick={() => updateTable(i, { color: c })}
                                  >
                                    <IconCheckboxTick
                                      style={{
                                        color: t.color === c ? "white" : c,
                                      }}
                                    />
                                  </button>
                                ))}
                            </div>
                          </div>
                        </div>
                      }
                      trigger="click"
                      position="bottomLeft"
                      showArrow
                    >
                      <div
                        className="h-[32px] w-[32px] rounded mb-2"
                        style={{ backgroundColor: t.color }}
                      />
                    </Popover>
                  </Col>
                  <Col span={7}>
                    <Button
                      block
                      onClick={() => {
                        setIndexActiveKey("1");
                        const updatedTables = [...tables];
                        updatedTables[i] = {
                          ...t,
                          indices: [
                            ...t.indices,
                            { name: `index_${t.indices.length}`, fields: [] },
                          ],
                        };
                        setTables(updatedTables);
                      }}
                    >
                      Add index
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      onClick={() => {
                        const updatedTables = [...tables];
                        updatedTables[i].fields = [
                          ...updatedTables[i].fields,
                          {
                            name: "",
                            type: "",
                            default: "",
                            check: "",
                            primary: false,
                            unique: false,
                            notNull: false,
                            increment: false,
                            comment: "",
                          },
                        ];
                        setTables(updatedTables);
                      }}
                      block
                    >
                      Add field
                    </Button>
                  </Col>
                  <Col span={3}>
                    <Button
                      icon={<IconDeleteStroked />}
                      type="danger"
                      onClick={() => {
                        Toast.success(`Table deleted!`);
                        deleteTable(i);
                        props.setSelectedTable("");
                      }}
                    ></Button>
                  </Col>
                </Row>
              </Collapse.Panel>
            </div>
          ))
        )}
      </Collapse>
    </>
  );
}
