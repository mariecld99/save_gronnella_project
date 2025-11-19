import { createContext, useContext, useMemo, useReducer } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../persistence/localStorage";

const initialState = {
  character: null,
  questId: null,
  inventory: null,
  creatures: null
};

function characterReducer(state, action) {
  switch (action.type) {
    case "CHARACTER/GET":
      return getFromLocalStorage("character");
    case "CHARACTER/SET":
      return action.payload;
    case "CHARACTER/SAVE":
      return setToLocalStorage("character", action.payload);
    default:
      return state;
  }
}

function questIdReducer(state, action) {
  switch (action.type) {
    case "QUESTID/GET":
      return getFromLocalStorage("questid");
      case "QUESTID/SET":
      return action.payload;
    case "QUESTID/SAVE":
      return setToLocalStorage("questid", action.payload);
    default:
      return state;
  }
}

function inventoryReducer(state, action) {
  switch (action.type) {
    case "INVENTORY/GET":
      return getFromLocalStorage("inventory");
    case "INVENTORY/SET":
      return action.payload;
    case "INVENTORY/SAVE":
      return setToLocalStorage("inventory", action.payload);
    default:
      return state;
  }
}

function creaturesReducer(state, action) {
  switch (action.type) {
    case "CREATURES/GET":
      return getFromLocalStorage("creatures");
    case "CREATURES/SET":
      return action.payload;
    case "CREATURES/SAVE":
      return setToLocalStorage("creatures", action.payload);
    default:
      return state;
  }
}

function combineReducers(reducers) {
  return (state, action) => {
    const next = {};
    let changed = false;
    for (const key of Object.keys(reducers)) {
      next[key] = reducers[key](state[key], action);
      changed ||= next[key] !== state[key];
    }
    return changed ? next : state;
  };
}

const rootReducer = combineReducers({
  character: characterReducer,
  questId: questIdReducer,
  inventory: inventoryReducer,
  creatures: creaturesReducer,
});

const GameContext = createContext();

export function GameProvider({children}) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const api = useMemo(
    () => ({
      getCharacter: () => dispatch({ type: "CHARACTER/GET" }),
      setCharacter: (char) => {
        dispatch({ type: "CHARACTER/SET", payload: char });
        dispatch({ type: "CHARACTER/SAVE", payload: char });
      },
      getQuestId: () => dispatch({ type: "QUESTID/GET" }),
      setQuestId: (id) => {
        dispatch({ type: "QUESTID/SET", payload: id })
        dispatch({ type: "QUESTID/SAVE", payload: id })
      },
      getInventory: () => dispatch({ type: "INVENTORY/GET" }),
      setInventory: (inventory) => {
        dispatch({ type: "INVENTORY/SET", payload: inventory })
        dispatch({ type: "INVENTORY/SAVE", payload: inventory })
      },
      getCreatures: () => dispatch({ type: "CREATURES/GET" }),
      setCreatures: (creatures) => {
        dispatch({ type: "CREATURES/SET", payload: creatures })
        dispatch({ type: "CREATURES/SAVE", payload: creatures })
      },
    }),
    []
  );

  return (
    <GameContext.Provider value={{ state, ...api }}>
      {children}
    </GameContext.Provider>
  )
}

export function useCharacter() {
  const ctx = useContext(GameContext);
  return {
    getCharacter: ctx.state.character,
    // getCharacter: ctx.getCharacter,
    setCharacter: ctx.setCharacter,
  };
}

export function useQuestId() {
  const ctx = useContext(GameContext);
  return {
    // getQuestId: ctx.getQuestId,
    getQuestId: ctx.state.questId,
    setQuestId: ctx.setQuestId,
  };
}

export function useInventory() {
  const ctx = useContext(GameContext);
  return {
    getInventory: ctx.state.inventory,
    // getInventory: ctx.getInventory,
    setInventory: ctx.setInventory,
  };
}

export function useCreatures() {
  const ctx = useContext(GameContext);
  return {
    getCreatures: ctx.state.creatures,
    // getCreatures: ctx.getCreatures,
    setCreatures: ctx.setCreatures,
  };
}