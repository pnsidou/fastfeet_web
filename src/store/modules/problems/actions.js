export function listProblems(query) {
  return {
    type: '@problems/LIST_REQUEST',
    payload: query,
  };
}

export function listProblemsSuccess(problems) {
  return {
    type: '@problems/LIST_SUCCESS',
    payload: problems,
  };
}

export function listProblemsFailure() {
  return {
    type: '@problems/LIST_FAILURE',
  };
}
