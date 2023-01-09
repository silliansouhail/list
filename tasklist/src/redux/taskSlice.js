import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskList",
    initialState:[
        {id:1,task:"task1",status:false},
        {id:2,task:"task2",status:false},
        {id:3,task:"task3",status:false}
    ],
    reducers:{
        addTask:(state,action)=>{
            const newTask={
                id:Date.now(),
                task:action.payload.task,
                status:false,
            }
            state= state.push(newTask);
        },
        filterTask:(state, action)=>{
            const index= state.findIndex((taskList)=>taskList.id === action.payload.id);
            state[index].status= action.payload.status;
        },
        editTask:(state, action)=>{
            const index= state.findIndex((taskList)=>taskList.id === action.payload.id);
            state[index].task= action.payload.task
        },
        deleteTask:(state,action) => {
            return state.filter((taskList)=>taskList.id !== action.payload.id);
        },

    }
});


export const {addTask,filterTask,deleteTask,editTask} = taskSlice.actions;

export default taskSlice.reducer;