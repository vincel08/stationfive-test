import React, { useState } from 'react'
import { Menu, MenuType } from './components'
import { data } from './data'
import { getDisabledMenus } from './lib/menu'

const App = () => {
  type AppState = {
    selected: Record<string, string>
  }

  const [state, setState] = useState<AppState>({
    selected: {}
  })

  const handleMenuSelect = (group: string, menu: MenuType) => {
    const currentSelected = parseInt(group.replace('menu-', ''))
    const selectedState: any = { ...state.selected }

    for (let i = currentSelected + 1; i < data.menus.length; i++) {
      delete selectedState[`menu-${i}`]
    }

    setState((prevState) => ({
      ...prevState,
      selected: {
        ...selectedState,
        [group]: menu.id
      }
    }))
  }

  const activeMenu = Object.keys(state.selected).length
  const disabledMenus = getDisabledMenus(state.selected, data.rules)

  return (
    <div className="App">
      {data.menus.map((options: any, index: number) => {
        return (
          <Menu
            key={`menu-${index}`}
            name={`menu-${index}`}
            options={options}
            onSelect={handleMenuSelect}
            isDisabled={activeMenu < index}
            disabledMenus={disabledMenus}
            selected={state.selected[`menu-${index}`]}
          />
        )
      })}
    </div>
  )
}

export default App
