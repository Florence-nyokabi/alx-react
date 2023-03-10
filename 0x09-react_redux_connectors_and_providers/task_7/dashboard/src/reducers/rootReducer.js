import courseReducer, { initialCourseState } from "./courseReducer";
import notificationReducer, {
  initialNotificationState,
} from "./notificationReducer";
import uiReducer, { initialUiState } from "./uiReducer";

import { Map } from "immutable";

export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUiState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;
