import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  todos:Todo[]=[];
  todo:Todo=new Todo();

  addTodo() {
    this.todos.push(this.todo);
    this.todo = new Todo();
  }
  complateTodo(id:string){
    let currentTodo : any = this.todos.find(x => x.id === id);
    currentTodo.complated=true;
  }
  deleteTodo(id:string){
    this.todos.splice(this.todos.findIndex(x=>x.id===id),1);
  }
  editTodo(a:Todo){
    this.deleteTodo(a.id)
    this.todo = a;
  }
}
export class Todo{
  id:string=Math.random()
  .toString(36)
  .substr(2,9);
  name:string="";
  complated:boolean=false;
 
}
// Aynı ID'li bir todo , TodoList'te varsa, ekrana ALERT metodunu kullanarak hata verdir.
  // Aynı isimli bir todo , TodoList'te varsa, ekrana ALERT metodunu kullanarak hata verdir.

