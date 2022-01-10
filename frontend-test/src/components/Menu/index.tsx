import React from 'react'
import { data } from '../../data'

import css from './Menu.module.scss'

export type MenuType = {
  id: number | string
  value: string
}

type onMenuItemSelect = (group: string, menu: MenuType) => void

interface MenuProps {
  name: string
  options: MenuType[]
  isDisabled: boolean
  onSelect: onMenuItemSelect
  disabledMenus: number[]
  selected: null | string
}

interface MenuOptionProps {
  group: string
  name: string
  menu: MenuType
  isDisabled: boolean
  onSelect: onMenuItemSelect
  isChecked: boolean
}

export const Menu = ({
  name,
  options,
  isDisabled,
  onSelect,
  disabledMenus,
  selected
}: MenuProps) => {
  return (
    <div className={css.root}>
      {options.map((menu, index) => {
        return (
          <MenuOption
            key={`menu-${index}`}
            group={name}
            name={name}
            menu={menu}
            isDisabled={
              isDisabled || disabledMenus.includes(parseInt(menu.id.toString()))
            }
            onSelect={onSelect}
            isChecked={menu.id == selected}
          />
        )
      })}
    </div>
  )
}

export const MenuOption = ({
  group,
  name,
  menu,
  isDisabled,
  onSelect,
  isChecked
}: MenuOptionProps) => {
  const handleChange = () => {
    onSelect(group, menu)
  }

  return (
    <div className={css.option}>
      <input
        type="radio"
        id={`menu-option-${menu.id}`}
        name={name}
        value={menu.id}
        disabled={isDisabled}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor={`menu-option-${menu.id}`}>{menu.value}</label>
    </div>
  )
}

Menu.defaultProps = {
  isDisabled: false,
  isChecked: false
}

MenuOption.defaultProps = {
  isDisabled: false
}
