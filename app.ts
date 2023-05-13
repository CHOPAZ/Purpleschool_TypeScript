/*  
  Mapped types
*/
type MOdifier = 'read' | 'update' | 'create';

type UserRoles = {
  customres?: MOdifier;
  projects?: MOdifier;
  adminPanal?: MOdifier;
}

/* стандартная запись, но в случае изменения UserRoles нужно менять и UserAccess1  */
type UserAccess1 = {
  customres?: boolean;
  projects?: boolean;
  adminPanal?: boolean;
}

/*Mapped types  */
type ModifierToAccess<Type> ={ 
  [Property in keyof Type]: boolean // берем каждый ключ в UserRoles и оно должно соответсвовать boolean
}

type UserAccess2 = ModifierToAccess<UserRoles>

/*  */
type ModifierToAccess2<Type> ={ 
  [Property in keyof Type]-?: boolean // -? все свойства обязательны, +? - все свойства необязательны
}
type UserAccess3 = ModifierToAccess2<UserRoles>

/*  */
type ModifierToAccess3<Type> ={ 
  +readonly [Property in keyof Type]-?: boolean //+readonly - добавляем readonly ко всем типам
}

/* Переименовывание свойст */
type ModifierToAccess4<Type> ={ 
  +readonly [Property in keyof Type as `canAccess${string & Property}`]-?: boolean //+readonly - добавляем readonly ко всем типам
}

type UserAccess4 = ModifierToAccess4<UserRoles> /*  
  type UserAccess4 = {
    readonly canAccesscustomres: boolean;
    readonly canAccessprojects: boolean;
    readonly canAccessadminPanal: boolean;
  } 
*/

/* Mapped types - полезно использовать когда есть совпадающие ключи, но в объекте нужны другие значения
  Дополнительно полезен, когде необходимо сделать какие то опциональные вещи
*/