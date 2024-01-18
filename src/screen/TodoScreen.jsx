import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";




export default function TodoScreen() {
  const addTask = ({ item, index }) => {
    return (
      <View
        style={{
          color: "black",
          padding: 10,
          marginBottom: 5,
          borderRadius: 5,
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:'#8696FE'
        }}
      >
        <Text style={{
          flex:1,
          fontSize:16,
          fontWeight:'bold'
        }}>{item.title}</Text>
        <IconButton icon={'pencil'} iconColor="black" onPress={()=>editTask(item)}/>
      <IconButton icon={'trash-can'} iconColor="black" onPress={()=>{deletTask(item.id)}}/>
      </View>
    );
  };
  const [all,setAll]=useState([])
  const [task,setTask]=useState('')
  const [edit,setEdit]=useState(null)
  const handelAddTask = () =>{
    if(task===''){
      alert('You mus write somthingto do')
    }else{
      setAll([...all,{id:Date.now().toString(),title:task}])
      setTask('')
    }
   
  }
  const deletTask = (id)=>{
    const updatedTasks = all.filter((task) => task.id !== id);
    setAll(updatedTasks)
  }
  const editTask = (todo) => {
    setEdit(todo.id);
    setTask(todo.title);
  };
  
  const finelEdit = () => {
    const finishEdit = all.map((todo) => {
      if (todo.id === edit) {
        return { ...todo, title: task };
      }
      return todo;
    });
    setAll(finishEdit);
    setEdit(null);
  };
  return (
    <View style={{ marginHorizontal: 16, }}>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1.5,
          borderRadius: 10,
          fontSize: 16,
        }}
        placeholder="Add a Task..."
        value={task}
        onChangeText={(e)=>{setTask(e)}}
      />
      {
        !edit ? <TouchableOpacity
        style={{
          backgroundColor: "black",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
        onPress={()=>handelAddTask()}
      >
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold",textAlign:'center' }}>
          Add
        </Text>
      </TouchableOpacity>:<TouchableOpacity
        style={{
          backgroundColor: "black",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
        onPress={()=>finelEdit()}
      >
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold",textAlign:'center' }}>
         edit
        </Text>
      </TouchableOpacity>
      }
      <FlatList
  data={all}
  renderItem={addTask}
  keyExtractor={(item) => item.id}
/>
{all.length === 0 &&<Text style={{
        fontSize:20,
        fontWeight:600,
        paddingVertical:20,
        textAlign:'center',
        color:'#ddd'
      }}>Make your day organized.</Text>}
    </View>
  );
}
