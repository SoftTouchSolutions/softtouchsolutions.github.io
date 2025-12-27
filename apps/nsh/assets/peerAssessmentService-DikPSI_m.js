import { A as APIServices } from "./index-AOv_UoEY.js";
import "./mui-BeFIxXnL.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
function transformPeerAssessmentsForUI(rawAssessments, employees = [], currentEmployeeId = null) {
  const items = Array.isArray(rawAssessments) ? rawAssessments : (rawAssessments == null ? void 0 : rawAssessments.assessments) || [];
  const empMap = (employees || []).reduce((acc, e) => {
    acc[e.employeeID] = e;
    return acc;
  }, {});
  const myId = currentEmployeeId;
  const outstanding = items.filter((a) => (a.assessorID === myId || a.assessor_id === myId) && (a.status === "pending" || a.status === "draft")).map((a) => ({
    assessmentID: a.assessmentID || a.assessmentId || a.id,
    assesseeID: a.assesseeID,
    relationship: a.relationship || a.relationship || null,
    peer_name: a.staff_name || empMap[a.assesseeID] && (empMap[a.assesseeID].staff_name || `${empMap[a.assesseeID].firstname || ""} ${empMap[a.assesseeID].lastname || ""}`) || a.assesseeID,
    department: a.department || empMap[a.assesseeID] && (empMap[a.assesseeID].department || empMap[a.assesseeID].deptname) || "",
    status: a.status || "pending"
  }));
  const submitted = items.filter((a) => (a.assessorID === myId || a.assessor_id === myId) && (a.status === "submitted" || a.status === "completed")).map((a) => ({
    assessmentID: a.assessmentID || a.assessmentId || a.id,
    assesseeID: a.assesseeID,
    relationship: a.relationship || a.relationship || null,
    peer_name: a.staff_name || empMap[a.assesseeID] && (empMap[a.assesseeID].staff_name || `${empMap[a.assesseeID].firstname || ""} ${empMap[a.assesseeID].lastname || ""}`) || a.assesseeID,
    department: a.department || empMap[a.assesseeID] && (empMap[a.assesseeID].department || empMap[a.assesseeID].deptname) || "",
    overall_rating: a.overall_rating || a.rating || 0,
    assessment_date: a.assessment_date || a.created_at || a.submitted_date || null,
    status: a.status || "submitted"
  }));
  const received = items.filter((a) => (a.assesseeID === myId || a.assessee_id === myId) && (a.status === "submitted" || a.status === "completed")).map((a) => ({
    assessmentID: a.assessmentID || a.assessmentId || a.id,
    assessorID: a.assessorID || a.assessor_id || null,
    relationship: a.relationship || a.relationship || null,
    peer_name: a.staff_name || empMap[a.assessorID] && (empMap[a.assessorID].staff_name || `${empMap[a.assessorID].firstname || ""} ${empMap[a.assessorID].lastname || ""}`) || a.assessorID || a.assessor_id || "",
    department: a.department || empMap[a.assessorID] && (empMap[a.assessorID].department || empMap[a.assessorID].deptname) || "",
    overall_rating: a.overall_rating || a.rating || 0,
    assessment_date: a.assessment_date || a.created_at || a.submitted_date || null,
    status: a.status || "submitted"
  }));
  return { outstanding, submitted, received };
}
function transformManagerAssessmentsForUI(rawAssessments, employees = [], currentEmployeeId = null) {
  const items = Array.isArray(rawAssessments) ? rawAssessments : (rawAssessments == null ? void 0 : rawAssessments.assessments) || (rawAssessments == null ? void 0 : rawAssessments.data) || [];
  const empMap = (employees || []).reduce((acc, e) => {
    acc[e.employeeID] = e;
    return acc;
  }, {});
  const myId = currentEmployeeId;
  const authored = items.filter((a) => a.manager_id === myId || a.assessorID === myId || a.managerID === myId).map((a) => ({
    assessmentID: a.sno || a.assessmentID || a.assessmentId || a.id,
    employeeID: a.employee_id || a.assesseeID || null,
    peer_name: a.staff_name || empMap[a.employee_id] && (empMap[a.employee_id].staff_name || `${empMap[a.employee_id].firstname || ""} ${empMap[a.employee_id].lastname || ""}`) || a.employee_id || "",
    department: a.department || empMap[a.employee_id] && (empMap[a.employee_id].department || empMap[a.employee_id].deptname) || "",
    overall_rating: a.overall_rating || a.rating || 0,
    assessment_date: a.assessment_date || a.created_at || a.submitted_date || null,
    status: a.status || "pending"
  }));
  const received = items.filter((a) => a.employee_id === myId || a.assesseeID === myId).map((a) => ({
    assessmentID: a.sno || a.assessmentID || a.assessmentId || a.id,
    managerID: a.manager_id || a.assessorID || a.managerID || null,
    peer_name: a.manager_name || empMap[a.manager_id] && (empMap[a.manager_id].staff_name || `${empMap[a.manager_id].firstname || ""} ${empMap[a.manager_id].lastname || ""}`) || a.manager_id || "",
    department: a.department || "",
    overall_rating: a.overall_rating || a.rating || 0,
    assessment_date: a.assessment_date || a.created_at || a.submitted_date || null,
    status: a.status || "submitted"
  }));
  return { authored, received };
}
function transformSubordinateAssessmentsForUI(rawAssessments, employees = [], currentEmployeeId = null) {
  const items = Array.isArray(rawAssessments) ? rawAssessments : (rawAssessments == null ? void 0 : rawAssessments.assessments) || (rawAssessments == null ? void 0 : rawAssessments.data) || [];
  const empMap = (employees || []).reduce((acc, e) => {
    acc[e.employeeID] = e;
    return acc;
  }, {});
  const myId = currentEmployeeId;
  const subs = items.filter((a) => a.relationship && a.relationship.toLowerCase() === "subordinate" || a.relationship && a.relationship === "SUBORDINATE").map((a) => ({
    assessmentID: a.assessmentID || a.assessmentId || a.id || a.sno,
    assessorID: a.assessorID || a.assessor_id || null,
    assesseeID: a.assesseeID || a.employee_id || null,
    peer_name: a.staff_name || empMap[a.assesseeID] && (empMap[a.assesseeID].staff_name || `${empMap[a.assesseeID].firstname || ""} ${empMap[a.assesseeID].lastname || ""}`) || a.assesseeID || a.assessorID || "",
    department: a.department || "",
    overall_rating: a.overall_rating || a.rating || 0,
    assessment_date: a.assessment_date || a.created_at || a.submitted_date || null,
    status: a.status || "pending"
  }));
  const assignedToMe = subs.filter((a) => a.assessorID === myId && (a.status === "pending" || a.status === "draft"));
  const received = subs.filter((a) => a.assesseeID === myId && (a.status === "submitted" || a.status === "completed"));
  return { assignedToMe, received };
}
async function loadInitialData() {
  const svc = APIServices;
  const currentEmployee = await svc.getCurrentEmployeeData();
  const criteriaResp = await svc.getAllPcriteria();
  let criteriaArray = [];
  if (Array.isArray(criteriaResp)) criteriaArray = criteriaResp;
  else if (criteriaResp && Array.isArray(criteriaResp.criteria)) criteriaArray = criteriaResp.criteria;
  else if (criteriaResp && Array.isArray(criteriaResp.data)) criteriaArray = criteriaResp.data;
  const configs = await svc.getAppraisalConfigurations();
  let colleagues = [];
  if (currentEmployee == null ? void 0 : currentEmployee.deptcode) {
    const deptEmps = await svc.getEmployeesByDepartmentForManager();
    colleagues = (deptEmps || []).filter((e) => e.employeeID !== currentEmployee.employeeID && e.deptcode === currentEmployee.deptcode);
  }
  return { currentEmployee, criteriaArray, configs: configs || [], colleagues };
}
async function getPeerAssessmentsView(currentEmployee, employees = []) {
  const svc = APIServices;
  const resp = await svc.getPeerAssessments();
  const myId = (currentEmployee == null ? void 0 : currentEmployee.employeeID) || (currentEmployee == null ? void 0 : currentEmployee.id) || (currentEmployee == null ? void 0 : currentEmployee.sno);
  const transformed = transformPeerAssessmentsForUI(resp, employees, myId);
  const peerOutstanding = (transformed.outstanding || []).filter((o) => (o.relationship || "").toString().toLowerCase() === "peer");
  const myAssessments = [...transformed.submitted || [], ...transformed.received || []];
  return { outstanding: peerOutstanding, myAssessments };
}
async function getManagerAndSubordinateViews(currentEmployee, employees = []) {
  const svc = APIServices;
  const myId = (currentEmployee == null ? void 0 : currentEmployee.employeeID) || (currentEmployee == null ? void 0 : currentEmployee.id) || (currentEmployee == null ? void 0 : currentEmployee.sno);
  const mgrResp = await svc.getManagerAssessments();
  const mgrTransformed = transformManagerAssessmentsForUI(mgrResp, employees, myId);
  const managerAssessments = [...mgrTransformed.authored || [], ...mgrTransformed.received || []];
  const peerResp = await svc.getPeerAssessments();
  const subTransformed = transformSubordinateAssessmentsForUI(peerResp, employees, myId);
  const subordinateAssessments = [...subTransformed.assignedToMe || [], ...subTransformed.received || []];
  return { managerAssessments, subordinateAssessments };
}
async function submitPeerAssessment(assessmentData, existingAssessmentId) {
  const svc = APIServices;
  if (existingAssessmentId) {
    return await svc.updatePeerAssessment(existingAssessmentId, { ...assessmentData, status: "submitted" });
  }
  return await svc.createPeerAssessment(assessmentData);
}
export {
  getManagerAndSubordinateViews,
  getPeerAssessmentsView,
  loadInitialData,
  submitPeerAssessment
};
