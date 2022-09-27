import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransactions, deleteTransactions, editTransactions, getTransactions } from "./transectionAPI";


const initialState = {
    transactions: [],
    isLoading : false,
    isError : false,
    error: '',
    editing: {}
}


export const fetchTransactions = createAsyncThunk("transaction/fetchTransactions", async()=>{

    const transactions = await getTransactions();

    return transactions;
});

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const transaction = await addTransactions(data);

    return transaction;
  }
);


export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async ({id, data}) => {
    const transaction = await editTransactions(id, data);

    return transaction;
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const transaction = await deleteTransactions(id);

    return transaction;
  }
);


// Create Slice 

const transactionsSlice = createSlice({
  name: "transaction",

  initialState,

  reducers: {
    editEnable: (state, action) => {
      state.editing = action.payload;
    },
    editDisable: (state) => {
      state.editing = {}
    }
  },

  extraReducers: (builder) => {
    builder
      // Fetching Transactions Data
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.transactions = [];
      })

      // Create Transactions

      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // Update Transaction
      .addCase(updateTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );

        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      // Delete Transaction
      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.payload.id
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default transactionsSlice.reducer;
export const {editEnable, editDisable} = transactionsSlice.actions;
