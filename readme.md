# Todo list

## Layout:
- [x] Criar componente Header:
  - [x] Fazer react-native entender SVG
  - [x] Delimitar o header 
- [x] Criar componente Input (InputBar)
- [ ] Task Container:
  - [x] Criar o Cabeçalho
  - [x] Listagem de tarefas:
    - [x]  Criar componente Tarefa
  - [ ] Criar empty state

## Funcionalidade:
  - [ ] Criar repositório de tarefas
  - [ ] adicionar uma nova tarefa ao repositório
  - [ ] remover tarefa do repositório
  - [ ] Mostrar empty state quando repositório estiver vazio
  - [ ] Concluir tarefas
  - [ ] Mostrar número de tarefas criadas e concluídas

## Modelos utilizados

```javascript

type Task = {
  _id: string;
  title: string;
  isCompleted: boolean;
}

```

CRUD:
C - Create
R - Read
U - Update
D - Delete