import React from "react";
import classes from './AddItem.module.scss'

const AddItem = () => (
  <div className={classes['add-item']}>
    <div className={classes.content}><h1>Добавить предмет</h1>
      <h2>Укажите заголовок и задание</h2>
      <input placeholder="Заголовок" type="text"/>
      <input placeholder="Задание" type="text"/></div>
    <div className={classes.buttons}>
      <button>Отмена</button>
      <button className={classes.save}>Сохранить</button>
    </div>
  </div>
)

export default AddItem
