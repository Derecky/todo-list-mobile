# Todo list

## Layout:
- [x] Criar componente Header:
  - [x] Fazer react-native entender SVG
  - [x] Delimitar o header 
- [x] Criar componente Input (InputBar)
- [x] Task Container:
  - [x] Criar o Cabeçalho
  - [x] Listagem de tarefas:
    - [x]  Criar componente Tarefa
  - [x] Criar empty state

## Funcionalidade:
  - [x] Criar repositório de tarefas
  - [x] adicionar uma nova tarefa ao repositório
  - [x] remover tarefa do repositório
  - [x] Mostrar empty state quando repositório estiver vazio
  - [x] Concluir tarefas
  - [x] Mostrar número de tarefas criadas e concluídas

## Modelos utilizados

```javascript

type Task = {
  _id: string;
  title: string;
  isCompleted: boolean;
}

```

CRUD:
- C: Create
- R: Read
- U: Update
- D: Delete