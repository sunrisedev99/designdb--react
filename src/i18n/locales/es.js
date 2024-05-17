const spanish = {
  name: "Spanish",
  native_name: "Español",
  code: "es",
};

const es = {
  translation: {
    report_bug: "Reportar Error",
    import: "Importar",
    file: "Archivo ",
    new: "Nuevo",
    new_window: "Nueva Ventana",
    open: "Abrir",
    save: "Guardar",
    save_as: "Guardar como",
    save_as_template: "Guardar como plantilla",
    template_saved: "Guardado de plantilla!",
    rename: "Renombrar",
    delete_diagram: "Eliminar diagrama",
    are_you_sure_delete_diagram:
      "Estás seguro de que quieres eliminar este diagrama? Esta operación es irreversible.",
    oops_smth_went_wrong: "Oops! Algo salió mal.",
    import_diagram: "Importar diagrama",
    import_from_source: "Importar desde fuente",
    export_as: "Exportar como",
    export_source: "Exportar fuente",
    models: "Modelos",
    exit: "Salir",
    edit: "Editar",
    undo: "Deshacer",
    redo: "Rehacer",
    clear: "limpiar",
    are_you_sure_clear:
      "Estás seguro de que quieres borrar el diagrama? Esto es irreversible.",
    cut: "cortar",
    copy: "Copiar",
    paste: "Pegar",
    duplicate: "Duplicar",
    delete: "Eliminar",
    copy_as_image: "Copiar como imagen",
    view: "Ver",
    header: "Encabezado",
    sidebar: "Barra lateral",
    issues: "Problemas",
    presentation_mode: "Modo de presentación",
    strict_mode: "Modo estricto",
    field_details: "Detalles del campo",
    reset_view: "Restablecer vista",
    show_grid: "Mostrar cuadrícula",
    show_cardinality: "Mostrar cardinalidad",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    zoom_in: "Acercar",
    zoom_out: "Alejar",
    fullscreen: "Pantalla completa",
    settings: "Configuraciones",
    show_timeline: "Mostrar línea de tiempo",
    autosave: "Guardado automático",
    panning: "Desplazamiento",
    table_width: "Ancho de la tabla",
    language: "Idioma",
    flush_storage: "Vaciar almacenamiento",
    are_you_sure_flush_storage:
      "Estás seguro de que quieres vaciar el almacenamiento? Esta operación es irreversible.",
    storage_flushed: "Almacenamiento vaciado!",
    help: "Ayuda",
    shortcuts: "Atajos",
    ask_on_discord: "Pregúntanos en Discord",
    feedback: "Retroalimentación",
    no_changes: "Sin cambios",
    loading: "Cargando...",
    last_saved: "Último guardado",
    saving: "Guardando... ",
    failed_to_save: "Error al guardar",
    fit_window_reset: "Ajustar ventana / Restablecer",
    zoom: "Zoom",
    add_table: "Añadir tabla",
    add_area: "Añadir área",
    add_note: "Añadir nota",
    add_type: "Añadir tipo",
    to_do: "Por hacer",
    tables: "Tablas",
    relationships: "Relaciones",
    subject_areas: "Áreas de tema",
    notes: "Notas",
    types: "Tipos",
    search: "Buscar...",
    no_tables: "Sin tablas",
    no_tables_text: "¡Comienza a construir tu diagrama!",
    no_relationships: "Sin relaciones",
    no_relationships_text: "¡Añade relaciones entre tablas!",
    no_subject_areas: "Sin áreas de tema",
    no_subject_areas_text: "¡Añade áreas de tema!",
    no_notes: "Sin notas",
    no_notes_text: "¡Añade notas!",
    no_types: "Sin tipos",
    no_types_text: " ¡Añade tipos!",
    no_issues: " Sin problemas",
    strict_mode_is_on_no_issues:
      "El modo estricto está activado y no hay problemas.",
    name: "Nombre",
    type: "Tipo",
    null: "Nulo",
    not_null: "No nulo",
    primary: "Primario",
    unique: "Único",
    autoincrement: "Autoincremental",
    default_value: "Valor predeterminado",
    check: "Expresión de verificación",
    this_will_appear_as_is: "*Esto aparecerá en el script generado tal cual.",
    comment: "Comentario",
    add_field: "Agregar campo",
    values: "valores",
    size: "Tamaño",
    precision: "Precisión",
    set_precision: "Establecer precisión: (tamaño, dígitos)",
    use_for_batch_input: "Usar, para entrada por lotes",
    indices: "Índices",
    add_index: "Agregar índice",
    select_fields: "Seleccionar campos",
    title: "Título",
    not_set: "No establecido",
    foreign: "Extranjero",
    cardinality: "Cardinalidad",
    on_update: "Al actualizar",
    on_delete: "Al eliminar",
    swap: "Intercambiar",
    one_to_one: "Uno a uno",
    one_to_many: "Uno a muchos",
    many_to_one: "Muchos a uno",
    content: "Contenido",
    types_info:
      "Esta característica está destinada a DBMSs objeto-relacionales como PostgreSQL.\nSi se usa para MySQL o MariaDB, se generará un tipo JSON con la verificación de validación json correspondiente.\nSi se usa para SQLite, se traducirá a un BLOB.\nSi se usa para MSSQL, se generará un alias de tipo al primer campo.",
    table_deleted: "Tabla eliminada",
    area_deleted: "Área eliminada",
    note_deleted: "Nota eliminada",
    relationship_deleted: "Relación eliminada",
    type_deleted: "Tipo eliminado",
    cannot_connect: "No se puede conectar, las columnas tienen diferentes tipos",
    copied_to_clipboard: "Copiado al portapapeles",
    create_new_diagram: "Crear nuevo diagrama",
    cancel: "Cancelar",
    open_diagram: "Abrir diagrama",
    rename_diagram: "Renombrar diagrama",
    export: "Exportar",
    export_image: "Exportar imagen",
    create: "Crear",
    confirm: "Confirmar",
    last_modified: "Última modificación",
    drag_and_drop_files: "Arrastra y suelta el archivo aquí o haz clic para subir.",
    support_json_and_ddb: "Se admiten archivos JSON y DDB",
    upload_sql_to_generate_diagrams:
      "Sube un archivo sql para autogenerar tus tablas y columnas.",
    overwrite_existing_diagram: "Sobrescribir diagrama existente",
    only_mysql_supported:
      "*Por el momento, solo se admite la carga de scripts de MySQL.",
    blank: "En blanco",
    filename: "Nombre del archivo",
    table_w_no_name: "Declarada una tabla sin nombre",
    duplicate_table_by_name: "Tabla duplicada con el nombre '{{tableName}}'",
    empty_field_name: "Campo `name` vacío en la tabla '{{tableName}}'",
    empty_field_type: "Campo `type` vacío en la tabla '{{tableName}}'",
    no_values_for_field:
      "El campo '{{fieldName}}' de la tabla '{{tableName}}' es de tipo `{{type}}` pero no se han especificado valores",
    default_doesnt_match_type:
      "El valor predeterminado para el campo '{{fieldName}}' en la tabla '{{table.name}}' no coincide con su tipo",
    not_null_is_null:
      "El campo '{{fieldName}}' de la tabla '{{tableName}}' es NOT NULL pero tiene NULL por defecto",
    duplicate_fields:
      "Campos de tabla duplicados por nombre '{{fieldName}}' en la tabla '{{tableName}}'",
    duplicate_index:
      "Índice duplicado por nombre '{{indexName}}' en la tabla '{{tableName}}'",
    empty_index: "Índice en la tabla '{{tableName}}' no indexa columnas",
    no_primary_key: "La tabla '{{tableName}}' no tiene clave primaria",
    type_with_no_name: "Declarado un tipo sin nombre",
    duplicate_types: "Tipos duplicados con el nombre '{{typeName}}'",
    type_w_no_fields: "Declarado un tipo vacío '{{typeName}}' sin campos",
    empty_type_field_name: "Campo `name` vacío en el tipo '{{typeName}}'",
    empty_type_field_type: "Campo `type` vacío en el tipo '{{typeName}}'",
    no_values_for_type_field:
      "El campo '{{fieldName}}' del tipo '{{typeName}}' es de tipo `{{type}}` pero no se han especificado valores",
    duplicate_type_fields:
      "Campos de tipo duplicados por nombre '{{fieldName}}' en el tipo '{{typeName}}'",
    duplicate_reference: "Referencia duplicada con el nombre '{{refName}}'",
    circular_dependency: "Dependencia circular involucrando la tabla '{{refName}}'",
    timeline: "Linea del tiempo",
    priority: "Prioridad",
    none: "Ninguno",
    low: "Bajo",
    medium: "Medio",
    high: "Alto",
    sort_by: "Ordenar por",
    my_order: "Mi orden",
    completed: "Completado",
    alphabetically: "Alfabéticamente",
    add_task: "Agregar tarea",
    details: "Detalles",
    no_tasks: "Aún no tienes tareas.",
    no_activity: "Aún no tienes actividad.",
    move_element: "Mover {{name}} a {{coords}}",
    edit_area: "{{extra}} Editar área {{areaName}}",
    delete_area: "Eliminar área {{areaName}}",
    edit_note: "{{extra}} Editar nota {{noteTitle}}",
    delete_note: "Eliminar nota {{noteTitle}}",
    edit_table: "{{extra}} Editar tabla {{tableName}}",
    delete_table: "Eliminar tabla {{tableName}}",
    edit_type: "{{extra}} Editar tipo {{typeName}}",
    delete_type: "Eliminar tipo {{typeName}}",
    add_relationship: "Agregar relación",
    edit_relationship: "{{extra}} Editar relación {{refName}}",
    delete_relationship: "Eliminar relación {{refName}}",
    not_found: "No encontrado",
  },
};

export { es, spanish };
