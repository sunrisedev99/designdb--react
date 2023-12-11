export const template5 = {
  tables: [
    {
      id: 0,
      name: "table_0",
      x: 55,
      y: 51,
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
      color: "#3cde7d",
    },
    {
      id: 1,
      name: "table_1",
      x: 325,
      y: 57,
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
      color: "#ffe159",
    },
    {
      id: 2,
      name: "table_2",
      x: 52,
      y: 191,
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
      x: 582,
      y: 11,
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
      color: "#175e7a",
    },
    {
      id: 4,
      name: "table_5",
      x: 584,
      y: 337,
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
      x: 579,
      y: 153,
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
      color: "#a751e8",
    },
  ],
  relationships: [
    {
      startTableId: 1,
      startFieldId: 2,
      endTableId: 0,
      endFieldId: 0,
      startX: 340,
      startY: 198,
      endX: 70,
      endY: 120,
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
      startX: 599,
      startY: 406,
      endX: 594,
      endY: 222,
      name: "table_4_id_fk",
      cardinality: "One to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      mandatory: false,
      id: 1,
    },
  ],
  notes: [],
  subjectAreas: [
    {
      id: 0,
      name: "area_0",
      x: 24,
      y: 10,
      width: 533,
      height: 291,
      color: "#32c9b0",
    },
  ],
  types: [],
  title: "Template 5",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla illo pariatur nostrum.",
};
