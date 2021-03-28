import {
  STUDENTS_DATA_FAILURE,
  STUDENTS_DATA_SUCCESS,
  STUDENTS_DATA_REQ,
  SINGLE_DATA_REQ,
  SINGLE_DATA_FAILURE,
  SINGLE_DATA_SUCCESS,
  SEARCH_DATA_REQ,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_SUCCESS,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
} from "./actionType";

const initState = {
  allData : [],
  studentsRecords: [],
  studentsNext: [],
  studentsPrev: [],
  studentsLength: [],
  singlestudentRecords: [],
  details: false,
  single: true,
  search : false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STUDENTS_DATA_REQ:
      return {
        ...state,
      };
    case STUDENTS_DATA_FAILURE:
      return {
        ...state,
      };
    case STUDENTS_DATA_SUCCESS:
      return {
        ...state,
        studentsRecords: [...payload.current],
        studentsNext: payload.next,
        studentsPrev: payload.prev,
        single: true,
        studentsLength: payload.length,
      };
    case SINGLE_DATA_REQ:
      return {
        ...state,
      };
    case SINGLE_DATA_FAILURE:
      return {
        ...state,
      };
    case SINGLE_DATA_SUCCESS:
      return {
        ...state,
        singlestudentRecords: payload,
        details: true,
      };
    case SEARCH_DATA_REQ:
      return {
        ...state,
        search :false
      };
    case SEARCH_DATA_FAILURE:
      return {
        ...state,
        search:false
      };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        studentsRecords: payload,
        single: false,
        search : true
      };
    case DATA_REQUEST:
      return{
        ...state
      }
    case DATA_SUCCESS:
      return{
        ...state,
        allData : payload
      };
    case DATA_FAILURE:
      return{
        ...state
      }

    default:
      return state;
  }
};
export default reducer;
