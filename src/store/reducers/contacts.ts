import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'
import * as enums from '../../utils/enums/contatos'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      grupos: enums.Grupos.WORK,
      titulo: 'Agência de Software',
      telefone: '(74)9191-9191',
      email: 'agencia@gmail.com',
      id: 1
    },
    {
      grupos: enums.Grupos.FAMILY,
      titulo: 'Pai',
      telefone: '(74)9191-9191',
      email: 'pai@gmail.com',
      id: 2
    },
    {
      grupos: enums.Grupos.GUYS,
      titulo: 'colega',
      telefone: '(74)9191-9191',
      email: 'colega@gmail.com',
      id: 3
    },
    {
      grupos: enums.Grupos.FAMILY,
      titulo: 'Marido',
      telefone: '(74)9191-9191',
      email: 'marido@gmail.com',
      id: 4
    },
    {
      grupos: enums.Grupos.FAMILY,
      titulo: 'Filha',
      telefone: '(74)9191-9191',
      email: 'filha@gmail.com',
      id: 5
    },
    {
      grupos: enums.Grupos.GUYS,
      titulo: 'amiga',
      telefone: '(74)9191-9191',
      email: 'amiga@gmail.com',
      id: 6
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (contatoExiste) {
        alert('Já Existe um contato com esse nome "ou" Descrição')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactsSlice.actions
export default contactsSlice.reducer
