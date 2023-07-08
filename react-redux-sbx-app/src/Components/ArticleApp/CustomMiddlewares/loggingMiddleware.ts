export const loggingMiddleware = (store: any) => (next: any) => (action: any) => {
    console.log('Action:', action);
    console.log('Previous State:', store.getState());
  
    const result = next(action);
  
    console.log('Next State:', store.getState());
    console.log('======🚀======');
  
    return result;
  };