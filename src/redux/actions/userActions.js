

export const updateSearchData = (searchText) => {
    return {
      type: 'UPDATE_SEARCH_DATA',
      payload: searchText,
    };
  };
  
  export const addUser = (user) => {
    return {
      type: 'ADD_USER',
      payload: user,
    };
  };
  
  export const editUser = (user) => {
    return {
      type: 'EDIT_USER',
      payload: user,
    };
  };
  
  export const deleteUser = (name) => {
    return {
      type: 'DELETE_USER',
      payload: name,
    };
  };
  