function* ErrorHandler(func: Function, error: any) {
  console.log(`ERROR: ${func.name} : ${error}`);
}

export default ErrorHandler;
