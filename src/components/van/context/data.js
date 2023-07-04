export const ACTIONS = {
  START_STOP: "START-STOP",
  GEAR_UP: "GEAR-UP",
  GEAR_DOWN: "GEAR-DOWN",
  SPEED_UP: "SPEED-UP",
  SPEED_DOWN: "SPEED-DOWN",
  CALCULATE_DISTANCE: "CALCULATE_DISTANCE",
};

function gearControl(num) {
  return num > 6 ? 6 : num < 0 ? 0 : num;
}
function speedControl(num) {
  return num > 350 ? 350 : num < 0 ? 0 : num;
}

export const initialState = () => {
  const initialValue = {
    gear: 0,
    speed: 0,
    distance: "",
  };
  return {
    engineOn: false,
    actions: initialValue,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_STOP:
      return { ...state, engineOn: !state.engineOn };

    case ACTIONS.GEAR_UP:
      if (state.engineOn) {
        return {
          ...state,
          actions: {
            ...state.actions,
            gear: gearControl(state.actions.gear + 1),
          },
        };
      }
    case ACTIONS.GEAR_DOWN:
      if (state.engineOn) {
        return {
          ...state,
          actions: {
            ...state.actions,
            gear: gearControl(state.actions.gear - 1),
          },
        };
      }

    case ACTIONS.SPEED_UP:
      const speedUpstream = {
        1: 5,
        2: 10,
        3: 20,
        4: 25,
        5: 30,
        6: 35,
      };
      const gear = state.actions.gear;
      const speedPlus = speedUpstream[gear];
      if (state.engineOn) {
        {
          return {
            ...state,
            actions: {
              ...state.actions,
              speed: speedControl(state.actions.speed + speedPlus),
            },
          };
        }
      }
    case ACTIONS.SPEED_DOWN:
      const speedDownStream = {
        1: 3,
        2: 7,
        3: 15,
        4: 20,
        5: 25,
        6: 28,
      };
      const gearDecrease = state.actions.gear;
      const speedMinus = speedDownStream[gearDecrease];
      if (state.engineOn) {
        return {
          ...state,
          actions: {
            ...state.actions,
            speed: speedControl(state.actions.speed - speedMinus),
          },
        };
      }

    case ACTIONS.CALCULATE_DISTANCE:
      let newDistance = parseFloat(action.changePayload);
      if (!isNaN(newDistance)) {
        return {
          ...state,
          actions: { ...state.actions, distance: newDistance },
        };
      }

    default:
      return state;
  }
};
