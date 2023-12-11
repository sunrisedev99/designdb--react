export const template7 = {
  tables: [
    {
      id: 0,
      name: "table_0",
      x: 55,
      y: 23,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "name",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
          size: 255,
        },
      ],
      comment: "",
      indices: [],
      color: "#f03c3c",
    },
    {
      id: 1,
      name: "table_1",
      x: 330,
      y: 147,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "age",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "t_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
        },
      ],
      comment: "",
      indices: [],
      color: "#3cde7d",
    },
    {
      id: 2,
      name: "table_2",
      x: 576,
      y: 311,
      fields: [
        {
          name: "id",
          type: "INT",
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
      color: "#7c4af0",
    },
    {
      id: 3,
      name: "table_4",
      x: 580,
      y: 28,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "quantity",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
      ],
      comment: "",
      indices: [],
      color: "#ff9159",
    },
    {
      id: 4,
      name: "table_5",
      x: 324,
      y: 338,
      fields: [
        {
          name: "id",
          type: "INT",
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
      color: "#7d9dff",
    },
    {
      id: 5,
      name: "table_6",
      x: 58,
      y: 284,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "field",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
          size: 255,
        },
        {
          name: "type",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          size: "",
          values: ["hi", "hello"],
        },
      ],
      comment: "",
      indices: [],
      color: "#ff4f81",
    },
    {
      id: 6,
      name: "table_6",
      x: 580,
      y: 182,
      fields: [
        {
          name: "id",
          type: "INT",
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
      color: "#175e7a",
    },
    {
      id: 7,
      name: "table_7",
      x: 324,
      y: 26,
      fields: [
        {
          name: "id",
          type: "INT",
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
      color: "#175e7a",
    },
  ],
  relationships: [
    {
      startTableId: 1,
      startFieldId: 2,
      endTableId: 0,
      endFieldId: 0,
      startX: 345,
      startY: 288,
      endX: 70,
      endY: 92,
      name: "table_1_t_id_fk",
      cardinality: "One to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      mandatory: false,
      id: 0,
    },
    {
      startTableId: 4,
      startFieldId: 0,
      endTableId: 5,
      endFieldId: 0,
      startX: 339,
      startY: 407,
      endX: 73,
      endY: 353,
      name: "table_4_id_fk",
      cardinality: "One to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      mandatory: false,
      id: 1,
    },
  ],
  notes: [
    {
      id: 0,
      x: 60,
      y: 181,
      title: "note_0",
      content: "bruh",
      color: "#fcf7ac",
      height: 65,
    },
  ],
  subjectAreas: [],
  types: [],
  title: "Template 7",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla illo pariatur nostrum.",
};
