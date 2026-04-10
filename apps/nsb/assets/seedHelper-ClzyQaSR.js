import { e as employeeRepository, m as managerRepository, u as userRepository, b as businessGoalRepository, g as goalRepository, d as developmentPlanRepository, a as appraisalPeriodRepository, c as goalProgressRepository, f as feedbackRepository, p as performanceMetricRepository, h as performanceReviewRepository, i as performanceCriteriaRepository, j as departmentRepository, k as performanceScoreRepository, l as peerAssessmentRepository } from "./index-DTmWxS77.js";
import "./mui-6YGer9Nu.js";
import "./vendor-DcOWwNOt.js";
import "./utils-pMlYcaaZ.js";
async function seedEmployee(employee) {
  try {
    if (employee && employee.employeeID) {
      const found = await employeeRepository.find({ employeeID: employee.employeeID });
      if (found && found.length) return found[0];
    }
    if (employee && employee.email) {
      const foundByEmail = await employeeRepository.find({ email: employee.email });
      if (foundByEmail && foundByEmail.length) return foundByEmail[0];
    }
  } catch (e) {
  }
  return await employeeRepository.add(employee);
}
async function updateEmployeeDept(employeeID, deptcode) {
  const found = await employeeRepository.find({ employeeID });
  if (!found || found.length === 0) return null;
  const emp = { ...found[0], deptcode };
  try {
    await employeeRepository.remove(found[0]);
  } catch (e) {
  }
  return await employeeRepository.add(emp);
}
async function seedManager(manager) {
  try {
    if (manager && manager.employeeID) {
      const found = await managerRepository.find({ employeeID: manager.employeeID });
      if (found && found.length) return found[0];
    }
    if (manager && manager.email) {
      const foundByEmail = await managerRepository.find({ email: manager.email });
      if (foundByEmail && foundByEmail.length) return foundByEmail[0];
    }
  } catch (e) {
  }
  return await managerRepository.add(manager);
}
async function seedUser(user) {
  try {
    if (user && user.email) {
      const found = await userRepository.find({ email: user.email });
      if (found && found.length) return found[0];
    }
  } catch (e) {
  }
  return await userRepository.add(user);
}
async function createUserAndLogin(domainServices, user) {
  await domainServices.createUser(user);
  await domainServices.login({ email: user.email, password: user.password });
}
async function seedBusinessGoal(businessGoal) {
  return await businessGoalRepository.add(businessGoal);
}
async function seedGoal(goal) {
  return await goalRepository.add(goal);
}
async function seedDevelopmentPlan(plan) {
  return await developmentPlanRepository.add(plan);
}
async function seedAppraisalPeriod(period) {
  return await appraisalPeriodRepository.add(period);
}
async function seedGoalProgress(progress) {
  return await goalProgressRepository.createGoalProgress(progress);
}
async function seedSurvey(survey) {
  return await feedbackRepository.add({
    ...survey,
    feedback_type: "survey"
  });
}
async function seedSurveyResponse(response) {
  return await feedbackRepository.add({
    ...response,
    feedback_type: "survey_response"
  });
}
async function seedPerformanceMetric(metric) {
  return await performanceMetricRepository.add(metric);
}
async function seedPerformanceReview(review) {
  return await performanceReviewRepository.add(review);
}
async function seedPerformanceCriteria(criteria) {
  return await performanceCriteriaRepository.add(criteria);
}
async function seedDepartment(department) {
  return await departmentRepository.add(department);
}
async function seedPerformanceScore(score) {
  return await performanceScoreRepository.add(score);
}
async function seedPeerAssessment(assessment) {
  return await peerAssessmentRepository.createPeerAssessment(assessment);
}
async function seedFeedback(feedback) {
  return await feedbackRepository.createFeedback(feedback);
}
const testFixtures = {
  // ========== Demo Users (Manual Testing & App Runtime) ==========
  // These users are auto-seeded on first login for manual testing without test framework
  demoUsers: [
    {
      email: "admin@nshrm.com",
      password: "admin123",
      userType: "admin",
      name: "System Admin",
      employeeID: "EMP0001",
      firstname: "System",
      lastname: "Admin"
    },
    {
      email: "admin.test.2025@nshrm.com",
      password: "AdminPass123!",
      userType: "admin",
      name: "Test Admin",
      employeeID: "EMP001",
      firstname: "Admin",
      lastname: "Test"
    },
    {
      email: "manager@nshrm.com",
      password: "manager123",
      userType: "manager",
      name: "Department Manager",
      employeeID: "EMP0003",
      firstname: "Department",
      lastname: "Manager"
    },
    {
      email: "manager.test.2025@nshrm.com",
      password: "ManagerPass123!",
      userType: "manager",
      name: "Manager Test User",
      employeeID: "MGR001",
      firstname: "Manager",
      lastname: "Test"
    },
    {
      email: "employee@nshrm.com",
      password: "employee123",
      userType: "employee",
      name: "John Employee",
      employeeID: "EMP0004",
      firstname: "John",
      lastname: "Employee"
    },
    {
      email: "employee.test.2025@nshrm.com",
      password: "EmployeePass123!",
      userType: "employee",
      name: "Employee Test User",
      employeeID: "EMP002",
      firstname: "Employee",
      lastname: "Test"
    }
  ],
  // ========== Goal Workflow Fixtures (Approval Tracking Demo) ==========
  // Complete workflow: Create Goal → Submit → Manager Review → Approve → Track Progress
  goalWorkflowEmployee: {
    employeeID: "EMP-GOAL-001",
    title: "Mr",
    firstname: "Goal",
    lastname: "Tracker",
    gender: "Male",
    phonenumber: "5551112222",
    email: "goal.tracker@nshrm.com",
    address: "100 Goal Street",
    ethnicity: "Other",
    deptcode: "DEPT-GOAL",
    managerID: "MGR-GOAL-001",
    job_role: "Software Developer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-01-15")).toISOString(),
    branch: "HQ",
    training: "Agile",
    certification: "Scrum",
    skills: "JavaScript, React, Node.js",
    interests: "Performance Improvement",
    status: "active"
  },
  goalWorkflowEmployeeUser: {
    userID: "USER-GOAL-001",
    employeeID: "EMP-GOAL-001",
    email: "goal.tracker@nshrm.com",
    password: "GoalTracker123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  goalWorkflowManager: {
    employeeID: "MGR-GOAL-001",
    title: "Ms",
    firstname: "Goal",
    lastname: "Approver",
    gender: "Female",
    phonenumber: "5553334444",
    email: "goal.approver@nshrm.com",
    address: "200 Manager Ave",
    ethnicity: "Other",
    deptcode: "DEPT-GOAL",
    managerID: "EXEC001",
    job_role: "Engineering Manager",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2020-06-01")).toISOString(),
    branch: "HQ",
    training: "Leadership",
    certification: "PMP",
    skills: "Management, Coaching, Technical Leadership",
    interests: "Team Development",
    status: "active"
  },
  goalWorkflowManagerUser: {
    userID: "USER-MGR-GOAL-001",
    employeeID: "MGR-GOAL-001",
    email: "goal.approver@nshrm.com",
    password: "GoalApprover123!",
    securecode: "",
    userType: "manager",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  goalWorkflowDepartment: {
    dept_id: "DEPT-GOAL",
    dept_name: "Engineering",
    dept_head: "MGR-GOAL-001",
    description: "Software Engineering Department",
    budget: 75e4,
    headcount: 12
  },
  goalWorkflowAppraisalPeriod: {
    period_id: "AP-2025-Q1",
    period_name: "Q1 2025 Performance Cycle",
    start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
    end_date: (/* @__PURE__ */ new Date("2025-03-31")).toISOString(),
    status: "active",
    description: "First quarter performance appraisal period"
  },
  goalWorkflowBusinessGoal: {
    busgoal_id: "BG-2025-001",
    busgoal_title: "Improve Product Quality",
    busgoal_description: "Reduce defect rate by 30% through improved testing practices",
    department: "DEPT-GOAL",
    fiscal_year: "2025",
    target_metric: "defect_rate",
    target_value: 30,
    current_value: 0,
    status: "active",
    priority: "high",
    owner: "MGR-GOAL-001",
    created_date: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Individual Goals - Different States for Demo
  goalPendingApproval: {
    goalID: 1001,
    busgoal: "BG-2025-001",
    employee: "EMP-GOAL-001",
    ID: "GOAL-PEND-001",
    goal_title: "Implement Unit Testing Framework",
    goal_description: "Set up Jest testing framework with 80% code coverage target",
    key_result: "Achieve 80% code coverage on core modules",
    projected_start_date: (/* @__PURE__ */ new Date("2025-01-15")).toISOString(),
    projected_target_date: (/* @__PURE__ */ new Date("2025-02-28")).toISOString(),
    actual_start_date: null,
    actual_completion_date: null,
    goal_progress: 0,
    goal_status: "pending",
    approval: 0,
    // Not yet approved
    appraisal_period: "AP-2025-Q1",
    date_modified: (/* @__PURE__ */ new Date()).toISOString()
  },
  goalApproved: {
    goalID: 1002,
    busgoal: "BG-2025-001",
    employee: "EMP-GOAL-001",
    ID: "GOAL-APPR-001",
    goal_title: "Reduce API Response Time",
    goal_description: "Optimize database queries to reduce average API response time to under 200ms",
    key_result: "Average API response time < 200ms",
    projected_start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
    projected_target_date: (/* @__PURE__ */ new Date("2025-03-15")).toISOString(),
    actual_start_date: (/* @__PURE__ */ new Date("2025-01-05")).toISOString(),
    actual_completion_date: null,
    goal_progress: 45,
    goal_status: "in_progress",
    approval: 1,
    // Approved by manager
    appraisal_period: "AP-2025-Q1",
    date_modified: (/* @__PURE__ */ new Date()).toISOString()
  },
  goalCompleted: {
    goalID: 1003,
    busgoal: "BG-2025-001",
    employee: "EMP-GOAL-001",
    ID: "GOAL-COMP-001",
    goal_title: "Complete Security Audit",
    goal_description: "Conduct comprehensive security audit and fix all critical vulnerabilities",
    key_result: "Zero critical vulnerabilities in production",
    projected_start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
    projected_target_date: (/* @__PURE__ */ new Date("2025-01-31")).toISOString(),
    actual_start_date: (/* @__PURE__ */ new Date("2025-01-02")).toISOString(),
    actual_completion_date: (/* @__PURE__ */ new Date("2025-01-28")).toISOString(),
    goal_progress: 100,
    goal_status: "completed",
    approval: 1,
    appraisal_period: "AP-2025-Q1",
    date_modified: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Goal Progress Tracking Records
  goalProgressRecords: [
    {
      progressID: 2001,
      goalID: 1002,
      // Links to goalApproved
      progress_percentage: 15,
      progress_notes: "Completed initial database query analysis. Identified 5 slow queries.",
      milestones_completed: "Query Analysis",
      progress_date: (/* @__PURE__ */ new Date("2025-01-10")).toISOString(),
      updated_by: "EMP-GOAL-001"
    },
    {
      progressID: 2002,
      goalID: 1002,
      progress_percentage: 30,
      progress_notes: "Optimized 3 of 5 slow queries. Average response time reduced from 450ms to 280ms.",
      milestones_completed: "Query Analysis, Initial Optimization",
      progress_date: (/* @__PURE__ */ new Date("2025-01-20")).toISOString(),
      updated_by: "EMP-GOAL-001"
    },
    {
      progressID: 2003,
      goalID: 1002,
      progress_percentage: 45,
      progress_notes: "Added database indexes and caching layer. Response time now at 220ms average.",
      milestones_completed: "Query Analysis, Initial Optimization, Indexing",
      progress_date: (/* @__PURE__ */ new Date("2025-01-30")).toISOString(),
      updated_by: "EMP-GOAL-001"
    }
  ],
  // Development Plan linked to goals
  goalWorkflowDevelopmentPlan: {
    plan_id: "DP-GOAL-001",
    employee_id: "EMP-GOAL-001",
    plan_title: "Q1 2025 Development Plan",
    description: "Focus on testing skills and performance optimization techniques",
    goals: ["GOAL-PEND-001", "GOAL-APPR-001", "GOAL-COMP-001"],
    skills_to_develop: ["Unit Testing", "Performance Optimization", "Security Best Practices"],
    training_required: ["Jest Masterclass", "Database Optimization Workshop"],
    mentor: "MGR-GOAL-001",
    start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
    target_completion: (/* @__PURE__ */ new Date("2025-03-31")).toISOString(),
    status: "in_progress",
    created_date: (/* @__PURE__ */ new Date()).toISOString()
  },
  // ========== Survey Manager Fixtures (Module 6) ==========
  surveyEmployee: {
    employeeID: "EMP-SURVEY-001",
    title: "Mr",
    firstname: "Survey",
    lastname: "Employee",
    gender: "Male",
    phonenumber: "9876543210",
    email: "survey.employee@nshrm.com",
    address: "456 Survey Ave",
    ethnicity: "Other",
    deptcode: "DEPT002",
    managerID: "MGR002",
    job_role: "Analyst",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2024-01-15")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "Data Analysis, Surveys",
    interests: "Analytics",
    status: "active"
  },
  surveyEmployeeUser: {
    userID: "USER-SURVEY-001",
    employeeID: "EMP-SURVEY-001",
    email: "survey.employee@nshrm.com",
    password: "SurveyPass123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  survey: {
    survey_id: "SURVEY001",
    survey_title: "Employee Engagement Survey 2024",
    survey_description: "Annual employee engagement and satisfaction assessment",
    survey_type: "engagement",
    target_audience: "DEPT002",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString(),
    status: "active",
    anonymity: 1,
    created_by: "ADMIN001",
    created_date: (/* @__PURE__ */ new Date()).toISOString(),
    question_count: 5,
    questions: [
      { q_id: "Q1", question_text: "How satisfied are you with your role?", type: "rating", scale: 5, mandatory: true },
      { q_id: "Q2", question_text: "Do you have clear career development goals?", type: "yes_no", mandatory: true },
      { q_id: "Q3", question_text: "How effective is your manager?", type: "rating", scale: 5 },
      { q_id: "Q4", question_text: "What areas need improvement?", type: "text" },
      { q_id: "Q5", question_text: "Would you recommend this company?", type: "rating", scale: 5 }
    ]
  },
  surveyResponse: {
    response_id: "RESPONSE001",
    survey_id: "SURVEY001",
    employee_id: "EMP-SURVEY-001",
    submission_date: (/* @__PURE__ */ new Date()).toISOString(),
    responses: [
      { q_id: "Q1", answer: "5", answer_type: "rating" },
      { q_id: "Q2", answer: "yes", answer_type: "yes_no" },
      { q_id: "Q3", answer: "4", answer_type: "rating" },
      { q_id: "Q4", answer: "More remote work flexibility", answer_type: "text" },
      { q_id: "Q5", answer: "5", answer_type: "rating" }
    ],
    status: "submitted",
    completion_percentage: 100
  },
  // Additional fixtures for independent survey tests
  surveyEmployee2: {
    employeeID: "EMP-SURVEY-002",
    title: "Ms",
    firstname: "Survey",
    lastname: "Validator",
    gender: "Female",
    phonenumber: "9876543211",
    email: "survey.validator@nshrm.com",
    address: "457 Survey Ave",
    ethnicity: "Other",
    deptcode: "DEPT002",
    managerID: "MGR002",
    job_role: "Quality Analyst",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2024-02-01")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "Quality Assurance",
    interests: "Testing",
    status: "active"
  },
  surveyEmployee2User: {
    userID: "USER-SURVEY-002",
    employeeID: "EMP-SURVEY-002",
    email: "survey.validator@nshrm.com",
    password: "ValidatorPass123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  survey2: {
    survey_id: "SURVEY002",
    survey_title: "Compliance Training Survey",
    survey_description: "Annual compliance training assessment",
    survey_type: "compliance",
    target_audience: "DEPT002",
    start_date: (/* @__PURE__ */ new Date()).toISOString(),
    end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString(),
    status: "active",
    anonymity: 1,
    created_by: "ADMIN001",
    created_date: (/* @__PURE__ */ new Date()).toISOString(),
    question_count: 5,
    questions: [
      { q_id: "Q1", question_text: "Completed compliance training?", type: "yes_no", mandatory: true },
      { q_id: "Q2", question_text: "Understand policies?", type: "yes_no", mandatory: true },
      { q_id: "Q3", question_text: "Overall rating", type: "rating", scale: 5 },
      { q_id: "Q4", question_text: "Comments", type: "text" },
      { q_id: "Q5", question_text: "Will apply knowledge?", type: "yes_no", mandatory: true }
    ]
  },
  surveyResponse2: {
    response_id: "RESPONSE002",
    survey_id: "SURVEY002",
    employee_id: "EMP-SURVEY-002",
    submission_date: (/* @__PURE__ */ new Date()).toISOString(),
    responses: [
      { q_id: "Q1", answer: "yes", answer_type: "yes_no" },
      { q_id: "Q2", answer: "yes", answer_type: "yes_no" },
      { q_id: "Q3", answer: "5", answer_type: "rating" },
      { q_id: "Q4", answer: "Very informative", answer_type: "text" },
      { q_id: "Q5", answer: "yes", answer_type: "yes_no" }
    ],
    status: "submitted",
    completion_percentage: 100
  },
  // ========== Report Manager Fixtures (Module 7) ==========
  reportManager: {
    employeeID: "MGR001",
    title: "Mr",
    firstname: "Report",
    lastname: "Manager",
    gender: "Male",
    phonenumber: "5551234567",
    email: "manager.report@nshrm.com",
    address: "789 Manager Blvd",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "EXEC001",
    job_role: "Department Manager",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-06-01")).toISOString(),
    branch: "HQ",
    training: "Leadership",
    certification: "PMP",
    skills: "Management, Analytics, Reporting",
    interests: "Strategic Planning",
    status: "active"
  },
  reportManagerUser: {
    userID: "USER-REPORT-MGR-001",
    employeeID: "MGR001",
    email: "manager.report@nshrm.com",
    password: "ManagerPass123!",
    securecode: "",
    userType: "manager",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  reportEmployee1: {
    employeeID: "EMP-REPORT-001",
    title: "Ms",
    firstname: "Alice",
    lastname: "Report",
    gender: "Female",
    phonenumber: "5559876543",
    email: "alice.report@nshrm.com",
    address: "123 Report Lane",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "MGR001",
    job_role: "Senior Analyst",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-09-01")).toISOString(),
    branch: "HQ",
    training: "Data Analysis",
    certification: "Tableau",
    skills: "Analytics, SQL, Python",
    interests: "Data Science",
    status: "active"
  },
  reportEmployee2: {
    employeeID: "EMP-REPORT-002",
    title: "Mr",
    firstname: "Bob",
    lastname: "Report",
    gender: "Male",
    phonenumber: "5554443333",
    email: "bob.report@nshrm.com",
    address: "456 Report Ave",
    ethnicity: "Other",
    deptcode: "DEPT-REPORT",
    managerID: "MGR001",
    job_role: "Analyst",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2024-02-15")).toISOString(),
    branch: "HQ",
    training: "Python",
    certification: "",
    skills: "Python, Excel, Analytics",
    interests: "Machine Learning",
    status: "active"
  },
  reportDepartment: {
    dept_id: "DEPT-REPORT",
    dept_name: "Analytics",
    dept_head: "MGR001",
    description: "Analytics and Reporting Department",
    budget: 5e5,
    headcount: 5
  },
  performanceMetrics: [
    {
      metric_id: "METRIC-EFF-001",
      metric_name: "Efficiency Score",
      category: "efficiency",
      metric_category: "efficiency",
      target: 80,
      target_value: 80,
      weight: 0.3,
      department: "DEPT-REPORT",
      description: "Measure of task completion rate and time management"
    },
    {
      metric_id: "METRIC-QUA-001",
      metric_name: "Quality Score",
      category: "quality",
      metric_category: "quality",
      target: 85,
      target_value: 85,
      weight: 0.4,
      department: "DEPT-REPORT",
      description: "Measure of work quality and accuracy"
    },
    {
      metric_id: "METRIC-ENG-001",
      metric_name: "Engagement Score",
      category: "engagement",
      metric_category: "engagement",
      target: 80,
      target_value: 80,
      weight: 0.3,
      department: "DEPT-REPORT",
      description: "Measure of employee engagement and participation"
    }
  ],
  performanceReviews: [
    {
      review_id: "REV-REPORT-001",
      employee_id: "EMP-REPORT-001",
      employeeID: "EMP-REPORT-001",
      manager_id: "MGR-REPORT-001",
      department: "DEPT-REPORT",
      review_period: "Q4-2024",
      period: "Q4-2024",
      overall_rating: 4.5,
      overallRating: 4.5,
      review_date: (/* @__PURE__ */ new Date("2024-10-15")).toISOString(),
      technical_skills: 4.5,
      communication: 4.3,
      teamwork: 4.4,
      metrics: {
        efficiency: 85,
        quality: 92,
        engagement: 88
      },
      feedback: "Excellent performance in Q4",
      createdAt: (/* @__PURE__ */ new Date("2024-10-15")).toISOString(),
      status: "completed"
    },
    {
      review_id: "REV-REPORT-002",
      employee_id: "EMP-REPORT-002",
      employeeID: "EMP-REPORT-002",
      manager_id: "MGR-REPORT-001",
      department: "DEPT-REPORT",
      review_period: "Q4-2024",
      period: "Q4-2024",
      overall_rating: 4.2,
      overallRating: 4.2,
      review_date: (/* @__PURE__ */ new Date("2024-10-20")).toISOString(),
      technical_skills: 4,
      communication: 4.2,
      teamwork: 4.3,
      metrics: {
        efficiency: 78,
        quality: 88,
        engagement: 80
      },
      feedback: "Good performance with room for improvement",
      createdAt: (/* @__PURE__ */ new Date("2024-10-20")).toISOString(),
      status: "completed"
    }
  ],
  performanceCriteria: [
    // ========== Task Execution Category (US-4.13) ==========
    {
      criteriaID: "CRIT-TE-001",
      criteriaName: "Target Achievement",
      category: "Task Execution",
      description: "Achievement of assigned goals and targets",
      relationships: ["SYSTEM"],
      // Auto-calculated from Goals
      isGoalBased: true,
      weight: 0.25,
      displayOrder: 1
    },
    {
      criteriaID: "CRIT-TE-002",
      criteriaName: "Timeliness",
      category: "Task Execution",
      description: "Meeting deadlines and time management",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 2
    },
    {
      criteriaID: "CRIT-TE-003",
      criteriaName: "Quality of Work",
      category: "Task Execution",
      description: "Accuracy and excellence in deliverables",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 3
    },
    {
      criteriaID: "CRIT-TE-004",
      criteriaName: "Job Knowledge",
      category: "Task Execution",
      description: "Understanding of role and domain expertise",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 4
    },
    {
      criteriaID: "CRIT-TE-005",
      criteriaName: "Growth - Skills Gained",
      category: "Task Execution",
      description: "New skills acquired and personal development",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.15,
      displayOrder: 5
    },
    // ========== Power Skills Category (US-4.13) ==========
    {
      criteriaID: "CRIT-PS-001",
      criteriaName: "Leadership and Initiative",
      category: "Power Skills",
      description: "Taking ownership and guiding others",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.25,
      displayOrder: 1
    },
    {
      criteriaID: "CRIT-PS-002",
      criteriaName: "Communication",
      category: "Power Skills",
      description: "Clear and effective verbal/written communication",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 2
    },
    {
      criteriaID: "CRIT-PS-003",
      criteriaName: "Grit",
      category: "Power Skills",
      description: "Perseverance and passion for long-term goals",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 3
    },
    {
      criteriaID: "CRIT-PS-004",
      criteriaName: "Attention to Details",
      category: "Power Skills",
      description: "Thoroughness and precision in work",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 4
    },
    {
      criteriaID: "CRIT-PS-005",
      criteriaName: "Problem Solving",
      category: "Power Skills",
      description: "Analytical thinking and solution development",
      relationships: ["SELF", "MANAGER"],
      isGoalBased: false,
      weight: 0.15,
      displayOrder: 5
    },
    // ========== Attitude Category (US-4.13) ==========
    {
      criteriaID: "CRIT-AT-001",
      criteriaName: "Support",
      category: "Attitude",
      description: "Willingness to help peers and subordinates",
      relationships: ["SELF", "PEER", "SUBORDINATE"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 1
    },
    {
      criteriaID: "CRIT-AT-002",
      criteriaName: "Communication (Interpersonal)",
      category: "Attitude",
      description: "Interpersonal communication with colleagues",
      relationships: ["SELF", "PEER", "SUBORDINATE"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 2
    },
    {
      criteriaID: "CRIT-AT-003",
      criteriaName: "Teamwork",
      category: "Attitude",
      description: "Collaboration and team contribution",
      relationships: ["SELF", "PEER", "SUBORDINATE"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 3
    },
    {
      criteriaID: "CRIT-AT-004",
      criteriaName: "Respect",
      category: "Attitude",
      description: "Treating others with dignity and consideration",
      relationships: ["SELF", "PEER", "SUBORDINATE"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 4
    },
    {
      criteriaID: "CRIT-AT-005",
      criteriaName: "Responsiveness",
      category: "Attitude",
      description: "Timely response to requests and queries",
      relationships: ["SELF", "PEER", "SUBORDINATE"],
      isGoalBased: false,
      weight: 0.2,
      displayOrder: 5
    }
  ],
  // ========== Login/Dashboard/Empman Test Fixtures ==========
  // Admin user for login and dashboard tests
  loginAdminUser: {
    userID: "USER-LOGIN-ADMIN-001",
    employeeID: "EMP-LOGIN-ADMIN-001",
    email: "admin.test.2025@nshrm.com",
    password: "AdminPass123!",
    securecode: "",
    userType: "admin",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  loginAdminEmployee: {
    employeeID: "EMP001",
    title: "Mr",
    firstname: "Admin",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5559999999",
    email: "admin.test.2025@nshrm.com",
    address: "999 Admin Ave",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "",
    job_role: "System Administrator",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2020-01-01")).toISOString(),
    branch: "HQ",
    training: "Administration",
    certification: "",
    skills: "Administration, System Management",
    interests: "System Operations",
    status: "active"
  },
  // Employee user for empman tests
  empmanEmployeeUser: {
    userID: "USER-EMPMAN-001",
    employeeID: "EMP002",
    email: "employee.test.2025@nshrm.com",
    password: "EmployeePass123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  empmanEmployee: {
    employeeID: "EMP002",
    title: "Ms",
    firstname: "Employee",
    lastname: "Test",
    gender: "Female",
    phonenumber: "5558888888",
    email: "employee.test.2025@nshrm.com",
    address: "888 Employee Rd",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "MGR001",
    job_role: "Software Developer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2022-06-15")).toISOString(),
    branch: "HQ",
    training: "Software Development",
    certification: "",
    skills: "JavaScript, React, Node.js",
    interests: "Web Development",
    status: "active"
  },
  // Second employee for team member tests
  empmanEmployee2User: {
    userID: "USER-EMPMAN-002",
    employeeID: "EMP003",
    email: "employee2.test.2025@nshrm.com",
    password: "EmpPass123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  empmanEmployee2: {
    employeeID: "EMP003",
    title: "Mr",
    firstname: "Employee2",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5558888889",
    email: "employee2.test.2025@nshrm.com",
    address: "889 Employee Rd",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "MGR001",
    job_role: "Quality Assurance",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-01-15")).toISOString(),
    branch: "HQ",
    training: "QA",
    certification: "",
    skills: "Testing, Automation",
    interests: "Quality Assurance",
    status: "active"
  },
  // Manager user for empman tests
  empmanManagerUser: {
    userID: "USER-EMPMAN-MGR-001",
    employeeID: "MGR001",
    email: "manager.test.2025@nshrm.com",
    password: "ManagerPass123!",
    securecode: "",
    userType: "manager",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  empmanManager: {
    employeeID: "MGR001",
    title: "Mr",
    firstname: "Manager",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5557777777",
    email: "manager.test.2025@nshrm.com",
    address: "777 Manager Way",
    ethnicity: "Other",
    deptcode: "ENG001",
    managerID: "EMP001",
    job_role: "Team Lead",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2021-03-01")).toISOString(),
    branch: "HQ",
    training: "Leadership",
    certification: "",
    skills: "Leadership, Project Management, Development",
    interests: "Team Development",
    status: "active"
  },
  // Debug user for repo operations (empman.integration.test.js)
  repoDebugUser: {
    userID: "USER-REPO-DEBUG-001",
    employeeID: "EMP-REPO-DEBUG-001",
    email: "repo.debug.delete@nshrm.com",
    password: "RepoDebug123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  repoDebugEmployee: {
    employeeID: "EMP-REPO-DEBUG-001",
    title: "Mr",
    firstname: "Debug",
    lastname: "User",
    gender: "Male",
    phonenumber: "5556666666",
    email: "repo.debug.delete@nshrm.com",
    address: "666 Debug St",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Quality Assurance",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-01-10")).toISOString(),
    branch: "HQ",
    training: "QA",
    certification: "",
    skills: "Testing, Automation",
    interests: "Quality Assurance",
    status: "active"
  },
  // Delete test user (user-delete.integration.test.js)
  deleteReproUser: {
    userID: "USER-DELETE-REPRO-001",
    employeeID: "EMP-DELETE-REPRO-001",
    email: "delete.repro.test@nshrm.com",
    password: "DeleteRepro123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  deleteReproEmployee: {
    employeeID: "EMP-DELETE-REPRO-001",
    title: "Ms",
    firstname: "Delete",
    lastname: "Repro",
    gender: "Female",
    phonenumber: "5555555555",
    email: "delete.repro.test@nshrm.com",
    address: "555 Delete Lane",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Tester",
    contract_type: "Contract",
    employment_date: (/* @__PURE__ */ new Date("2024-01-01")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "Testing",
    interests: "Testing",
    status: "active"
  },
  // Additional test users for empman cascade/delete tests
  cascadeTestUser: {
    userID: "USER-CASCADE-TEST-001",
    employeeID: "EMPCAS001",
    email: "cascade.test@nshrm.com",
    password: "CascadeTest123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  cascadeTestEmployee: {
    employeeID: "EMPCAS001",
    title: "Mr",
    firstname: "Cascade",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5554444444",
    email: "cascade.test@nshrm.com",
    address: "444 Cascade Way",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Associate",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-07-01")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "General",
    interests: "General",
    status: "active"
  },
  // Delete test users
  deleteTestUser: {
    userID: "USER-DELETE-TEST-001",
    employeeID: "EMP-DELETE-TEST-001",
    email: "delete.test@nshrm.com",
    password: "DeleteTest123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  deleteTestEmployee: {
    employeeID: "EMP-DELETE-TEST-001",
    title: "Ms",
    firstname: "Delete",
    lastname: "Test",
    gender: "Female",
    phonenumber: "5553333333",
    email: "delete.test@nshrm.com",
    address: "333 Delete Ave",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Staff",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-05-15")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "General",
    interests: "General",
    status: "active"
  },
  // Auth test user
  authTestUser: {
    userID: "USER-AUTH-TEST-001",
    employeeID: "EMP-AUTH-TEST-001",
    email: "authtest.user@nshrm.com",
    password: "AuthTest123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  authTestEmployee: {
    employeeID: "EMP-AUTH-TEST-001",
    title: "Mr",
    firstname: "Auth",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5552222222",
    email: "authtest.user@nshrm.com",
    address: "222 Auth St",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Staff",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-08-01")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "General",
    interests: "General",
    status: "active"
  },
  // Temp user
  tempUser: {
    userID: "USER-TEMP-001",
    employeeID: "EMP-TEMP-001",
    email: "temp.user@nshrm.com",
    password: "TempPass123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  tempEmployee: {
    employeeID: "EMP-TEMP-001",
    title: "Ms",
    firstname: "Temp",
    lastname: "User",
    gender: "Female",
    phonenumber: "5551111111",
    email: "temp.user@nshrm.com",
    address: "111 Temp Blvd",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Contractor",
    contract_type: "Contract",
    employment_date: (/* @__PURE__ */ new Date("2024-03-01")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "Consulting",
    interests: "Consulting",
    status: "active"
  },
  // Email delete test user
  emailDeleteTestUser: {
    userID: "USER-EMAIL-DELETE-001",
    employeeID: "EMP-EMAIL-DELETE-001",
    email: "email.delete.test@nshrm.com",
    password: "EmailDelete123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  emailDeleteTestEmployee: {
    employeeID: "EMP-EMAIL-DELETE-001",
    title: "Mr",
    firstname: "EmailDelete",
    lastname: "Test",
    gender: "Male",
    phonenumber: "5550000000",
    email: "email.delete.test@nshrm.com",
    address: "000 Email St",
    ethnicity: "Other",
    deptcode: "DEPT003",
    managerID: "MGR-EMPMAN-001",
    job_role: "Associate",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-09-15")).toISOString(),
    branch: "HQ",
    training: "",
    certification: "",
    skills: "General",
    interests: "General",
    status: "active"
  },
  // ========== Profile Picture Upload Fixtures (Module 3 - Dashboard) ==========
  // Complete workflow: Select Image → Validate → Upload → Store → Update Profile
  profilePictureEmployee: {
    employeeID: "EMP-PROFILE-PIC-001",
    title: "Ms",
    firstname: "Profile",
    lastname: "Picture",
    gender: "Female",
    phonenumber: "5559876543",
    email: "profile.picture@nshrm.com",
    address: "100 Profile Ave",
    ethnicity: "Other",
    deptcode: "DEPT-PROFILE",
    managerID: "MGR-PROFILE-001",
    job_role: "UI Designer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-06-01")).toISOString(),
    branch: "HQ",
    training: "Design Systems",
    certification: "UX Design",
    skills: "Figma, Photoshop, CSS",
    interests: "Visual Design",
    status: "active",
    profile_picture: null
    // Initially no profile picture
  },
  profilePictureEmployeeUser: {
    userID: "USER-PROFILE-PIC-001",
    employeeID: "EMP-PROFILE-PIC-001",
    email: "profile.picture@nshrm.com",
    password: "ProfilePic123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString(),
    profile_picture: null
    // Initially no profile picture
  },
  profilePictureDepartment: {
    dept_id: "DEPT-PROFILE",
    dept_name: "Design",
    dept_head: "MGR-PROFILE-001",
    description: "Design Department",
    budget: 3e5,
    headcount: 8
  },
  // Expected state after successful profile picture upload
  profilePictureUploadedState: {
    userId: "USER-PROFILE-PIC-001",
    employeeID: "EMP-PROFILE-PIC-001",
    email: "profile.picture@nshrm.com",
    // Path format: /uploads/profile_pictures/{userId}.{extension}
    profile_picture: "/uploads/profile_pictures/USER-PROFILE-PIC-001.jpg",
    uploaded_at: (/* @__PURE__ */ new Date()).toISOString(),
    file_size_bytes: 5e4,
    // ~50KB typical profile picture
    content_type: "image/jpeg",
    width: 300,
    height: 300
  },
  // Test image file metadata for mock files in Vitest
  testImageFiles: {
    validJpeg: {
      name: "1.jpg",
      type: "image/jpeg",
      size: 5e4,
      // 50KB
      path: "src/assets/images/photos/1.jpg"
    },
    validPng: {
      name: "2.png",
      type: "image/png",
      size: 75e3,
      // 75KB
      path: "src/assets/images/photos/2.jpg"
      // Actually jpg, but testing extension
    },
    validGif: {
      name: "gradient1.gif",
      type: "image/gif",
      size: 3e4,
      path: "src/assets/images/photos/gradient1.jpg"
    },
    tooLarge: {
      name: "large.jpg",
      type: "image/jpeg",
      size: 10485760,
      // 10MB - exceeds 5MB limit
      path: null
      // Mock file
    },
    invalidType: {
      name: "document.pdf",
      type: "application/pdf",
      size: 1e5,
      path: null
      // Mock file
    },
    invalidExtension: {
      name: "image.bmp",
      type: "image/bmp",
      size: 5e4,
      path: null
      // Not allowed extension
    }
  },
  // ========== Pre-Seeded Profile Picture Fixtures ==========
  // Employees who already have profile pictures (for display/update tests)
  seededProfileEmployee1: {
    employeeID: "EMP-SEEDED-PIC-001",
    title: "Mr",
    firstname: "Alex",
    lastname: "Designer",
    gender: "Male",
    phonenumber: "5551112233",
    email: "alex.designer@nshrm.com",
    address: "200 Design Blvd",
    ethnicity: "Other",
    deptcode: "DEPT-PROFILE",
    managerID: "MGR-PROFILE-001",
    job_role: "Senior Designer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2022-01-15")).toISOString(),
    branch: "HQ",
    training: "Visual Design",
    certification: "Adobe Certified",
    skills: "Illustrator, InDesign, Figma",
    interests: "Brand Design",
    status: "active",
    profile_picture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA=="
    // Placeholder base64
  },
  seededProfileEmployee1User: {
    userID: "USER-SEEDED-PIC-001",
    employeeID: "EMP-SEEDED-PIC-001",
    email: "alex.designer@nshrm.com",
    password: "AlexDesign123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString(),
    profile_picture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA=="
  },
  seededProfileEmployee2: {
    employeeID: "EMP-SEEDED-PIC-002",
    title: "Ms",
    firstname: "Beth",
    lastname: "Creative",
    gender: "Female",
    phonenumber: "5554445566",
    email: "beth.creative@nshrm.com",
    address: "201 Design Blvd",
    ethnicity: "Other",
    deptcode: "DEPT-PROFILE",
    managerID: "MGR-PROFILE-001",
    job_role: "Creative Director",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2021-03-01")).toISOString(),
    branch: "HQ",
    training: "Creative Leadership",
    certification: "Design Thinking",
    skills: "Strategy, Branding, UX",
    interests: "Innovation",
    status: "active",
    profile_picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
  },
  seededProfileEmployee2User: {
    userID: "USER-SEEDED-PIC-002",
    employeeID: "EMP-SEEDED-PIC-002",
    email: "beth.creative@nshrm.com",
    password: "BethCreative123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString(),
    profile_picture: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
  },
  seededProfileEmployee3: {
    employeeID: "EMP-SEEDED-PIC-003",
    title: "Mr",
    firstname: "Carlos",
    lastname: "Artist",
    gender: "Male",
    phonenumber: "5557778899",
    email: "carlos.artist@nshrm.com",
    address: "202 Design Blvd",
    ethnicity: "Other",
    deptcode: "DEPT-PROFILE",
    managerID: "MGR-PROFILE-001",
    job_role: "Visual Artist",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-07-15")).toISOString(),
    branch: "HQ",
    training: "Digital Art",
    certification: "",
    skills: "Photoshop, Procreate, Blender",
    interests: "3D Design",
    status: "active",
    profile_picture: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  seededProfileEmployee3User: {
    userID: "USER-SEEDED-PIC-003",
    employeeID: "EMP-SEEDED-PIC-003",
    email: "carlos.artist@nshrm.com",
    password: "CarlosArt123!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString(),
    profile_picture: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  },
  // ========== Dashboard Performance Fixtures (US-4.6 Feedback Viewing) ==========
  // Complete performance feedback data for employee dashboard visualization
  dashboardFeedback: [
    {
      feedbackID: 5001,
      employee: "EMP-GOAL-001",
      ID: "FB-DASH-001",
      reviewPeriod: "Q4-2024",
      feedback_date: (/* @__PURE__ */ new Date("2024-12-15")).toISOString(),
      task_execution: 85,
      power_skills: 82,
      attitude: 88,
      overall_goal_status: 78,
      points_earned: 83,
      total_score: 83.2,
      finalGrade: "A-",
      recommendation: "Eligible for promotion consideration",
      approved: 1
    },
    {
      feedbackID: 5002,
      employee: "EMP-GOAL-001",
      ID: "FB-DASH-002",
      reviewPeriod: "Q3-2024",
      feedback_date: (/* @__PURE__ */ new Date("2024-09-15")).toISOString(),
      task_execution: 78,
      power_skills: 75,
      attitude: 82,
      overall_goal_status: 70,
      points_earned: 76,
      total_score: 76.3,
      finalGrade: "B+",
      recommendation: "Continue current development path",
      approved: 1
    }
  ],
  dashboardSelfAssessments: [
    {
      assessmentID: 6001,
      employeeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2025-Q1",
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      status: "submitted",
      achievements: "Completed security audit ahead of schedule",
      challenges: "Learning new testing frameworks",
      goals_met: 85,
      self_rating: 4,
      strengths: "Problem-solving, attention to detail",
      areas_for_improvement: "Time estimation for complex tasks",
      training_needs: "Advanced performance optimization",
      career_aspirations: "Senior Software Engineer",
      comments: "Strong quarter overall",
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      assessmentID: 6002,
      employeeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2024-Q4",
      assessment_date: (/* @__PURE__ */ new Date("2024-10-01")).toISOString(),
      status: "reviewed",
      achievements: "Improved API response times by 40%",
      challenges: "Balancing multiple project priorities",
      goals_met: 90,
      self_rating: 4,
      strengths: "Technical skills, teamwork",
      areas_for_improvement: "Documentation practices",
      training_needs: "Leadership skills",
      career_aspirations: "Team Lead",
      comments: "Great progress this quarter",
      submitted_date: (/* @__PURE__ */ new Date("2024-10-15")).toISOString()
    },
    {
      assessmentID: 6003,
      employeeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2025-Q2",
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      status: "draft",
      achievements: "",
      challenges: "",
      goals_met: 0,
      self_rating: 0,
      strengths: "",
      areas_for_improvement: "",
      training_needs: "",
      career_aspirations: "",
      comments: "",
      submitted_date: null
    }
  ],
  dashboardPeerAssessments: [
    {
      assessmentID: 7001,
      assessorID: "EMP-REPORT-001",
      assesseeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2025-Q1",
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "peer",
      status: "submitted",
      teamwork: 4,
      communication: 5,
      leadership: 4,
      technical_skills: 5,
      professionalism: 4,
      overall_rating: 4.4,
      strengths: "Excellent technical knowledge and helpful attitude",
      areas_for_improvement: "Could take more initiative in meetings",
      additional_comments: "Great colleague to work with",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      assessmentID: 7002,
      assessorID: "EMP-REPORT-002",
      assesseeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2025-Q1",
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "peer",
      status: "submitted",
      teamwork: 5,
      communication: 4,
      leadership: 3,
      technical_skills: 5,
      professionalism: 5,
      overall_rating: 4.4,
      strengths: "Strong problem solver, always willing to help",
      areas_for_improvement: "Could improve leadership visibility",
      additional_comments: "Reliable team member",
      is_anonymous: true,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      assessmentID: 7003,
      assessorID: "MGR-GOAL-001",
      assesseeID: "EMP-GOAL-001",
      appraisalPeriod: "AP-2025-Q1",
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "subordinate",
      status: "submitted",
      teamwork: 4,
      communication: 4,
      leadership: 4,
      technical_skills: 5,
      professionalism: 5,
      overall_rating: 4.4,
      strengths: "Technical excellence and professional conduct",
      areas_for_improvement: "Continue developing soft skills",
      additional_comments: "Ready for increased responsibilities",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    }
  ],
  dashboardDevelopmentPlans: [
    {
      planID: 8001,
      employee: "EMP-GOAL-001",
      ID: "EMP-GOAL-001",
      competency_area: "Technical Leadership",
      plan_description: "Develop skills for tech lead role",
      skills: "Architecture Design, Code Review, Mentoring",
      projected_start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
      projected_target_date: (/* @__PURE__ */ new Date("2025-06-30")).toISOString(),
      dev_year: 2025,
      mode: "hybrid",
      plan_status: "In Progress",
      dev_progress: 45
    },
    {
      planID: 8002,
      employee: "EMP-GOAL-001",
      ID: "EMP-GOAL-001",
      competency_area: "Cloud Architecture",
      plan_description: "AWS certification and cloud design patterns",
      skills: "AWS, Terraform, Microservices",
      projected_start_date: (/* @__PURE__ */ new Date("2025-02-01")).toISOString(),
      projected_target_date: (/* @__PURE__ */ new Date("2025-08-31")).toISOString(),
      dev_year: 2025,
      mode: "online",
      plan_status: "In Progress",
      dev_progress: 30
    },
    {
      planID: 8003,
      employee: "EMP-GOAL-001",
      ID: "EMP-GOAL-001",
      competency_area: "Communication",
      plan_description: "Improve presentation and stakeholder communication",
      skills: "Public Speaking, Technical Writing",
      projected_start_date: (/* @__PURE__ */ new Date("2024-10-01")).toISOString(),
      projected_target_date: (/* @__PURE__ */ new Date("2025-03-31")).toISOString(),
      dev_year: 2025,
      mode: "in-person",
      plan_status: "Completed",
      dev_progress: 100
    }
  ],
  // ========== 360-Degree Assessment Workflow Fixtures (US-4.13-4.18) ==========
  // Complete data for testing the criteria-based 360 assessment workflow
  // Performance Period with linked criteria (Many-to-Many - US-4.14)
  assessment360Period: {
    periodID: 360001,
    period_start: "2025-01-01",
    period_end: "2025-03-31",
    review_start_date: (/* @__PURE__ */ new Date("2025-03-15")).toISOString(),
    review_end_date: (/* @__PURE__ */ new Date("2025-04-15")).toISOString(),
    review_status: "active"
  },
  // Selected criteria for this period (US-4.14 - demo selects 5 including Target Achievement)
  // PerformanceReview links criteria to period (renamed from PeriodCriteria)
  performanceReviewLinks: [
    { reviewID: "PC-001", periodID: 360001, criteriaID: "CRIT-TE-001", isActive: true },
    // Target Achievement (SYSTEM)
    { reviewID: "PC-002", periodID: 360001, criteriaID: "CRIT-TE-003", isActive: true },
    // Quality of Work
    { reviewID: "PC-003", periodID: 360001, criteriaID: "CRIT-PS-002", isActive: true },
    // Communication
    { reviewID: "PC-004", periodID: 360001, criteriaID: "CRIT-PS-005", isActive: true },
    // Problem Solving
    { reviewID: "PC-005", periodID: 360001, criteriaID: "CRIT-AT-003", isActive: true }
    // Teamwork
  ],
  // Team for 360 assessment (Manager + 3 Peers to ensure round-robin works)
  assessment360Manager: {
    managerID: "MGR-360-001",
    email: "manager.360@nshrm.com",
    deptcode: "DEPT-360",
    date_of_appointment: (/* @__PURE__ */ new Date("2022-01-01")).toISOString(),
    director: "EXEC001"
  },
  assessment360ManagerEmployee: {
    employeeID: "MGR-360-001",
    title: "Mr",
    firstname: "Michael",
    lastname: "Assessment",
    gender: "Male",
    phonenumber: "5553601001",
    email: "manager.360@nshrm.com",
    address: "360 Manager Ave",
    ethnicity: "Other",
    deptcode: "DEPT-360",
    managerID: "EXEC001",
    job_role: "Department Manager",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2022-01-01")).toISOString(),
    branch: "HQ",
    training: "Leadership",
    certification: "PMP",
    skills: "Management, Strategy",
    interests: "Leadership Development",
    status: "active"
  },
  assessment360ManagerUser: {
    userID: "USER-360-MGR-001",
    employeeID: "MGR-360-001",
    email: "manager.360@nshrm.com",
    password: "Manager360Pass!",
    securecode: "",
    userType: "manager",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Target employee for 360 assessment
  assessment360Employee: {
    employeeID: "EMP-360-001",
    title: "Ms",
    firstname: "Sarah",
    lastname: "Employee",
    gender: "Female",
    phonenumber: "5553602001",
    email: "sarah.360@nshrm.com",
    address: "360 Employee St",
    ethnicity: "Other",
    deptcode: "DEPT-360",
    managerID: "MGR-360-001",
    job_role: "Senior Developer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-03-01")).toISOString(),
    branch: "HQ",
    training: "Full Stack Development",
    certification: "AWS Solutions Architect",
    skills: "React, Node.js, AWS",
    interests: "Cloud Architecture",
    status: "active"
  },
  assessment360EmployeeUser: {
    userID: "USER-360-EMP-001",
    employeeID: "EMP-360-001",
    email: "sarah.360@nshrm.com",
    password: "Employee360Pass!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Peer 1 for round-robin assignment
  assessment360Peer1: {
    employeeID: "EMP-360-PEER-001",
    title: "Mr",
    firstname: "James",
    lastname: "Peer",
    gender: "Male",
    phonenumber: "5553603001",
    email: "james.peer@nshrm.com",
    address: "361 Peer Lane",
    ethnicity: "Other",
    deptcode: "DEPT-360",
    managerID: "MGR-360-001",
    job_role: "Developer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-06-01")).toISOString(),
    branch: "HQ",
    training: "Frontend Development",
    certification: "",
    skills: "React, TypeScript",
    interests: "UI/UX",
    status: "active"
  },
  assessment360Peer1User: {
    userID: "USER-360-PEER-001",
    employeeID: "EMP-360-PEER-001",
    email: "james.peer@nshrm.com",
    password: "Peer1Pass360!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Peer 2 for round-robin assignment
  assessment360Peer2: {
    employeeID: "EMP-360-PEER-002",
    title: "Ms",
    firstname: "Emily",
    lastname: "Colleague",
    gender: "Female",
    phonenumber: "5553604001",
    email: "emily.peer@nshrm.com",
    address: "362 Peer Ave",
    ethnicity: "Other",
    deptcode: "DEPT-360",
    managerID: "MGR-360-001",
    job_role: "Developer",
    contract_type: "Full-time",
    employment_date: (/* @__PURE__ */ new Date("2023-09-01")).toISOString(),
    branch: "HQ",
    training: "Backend Development",
    certification: "",
    skills: "Python, Django, PostgreSQL",
    interests: "Data Engineering",
    status: "active"
  },
  assessment360Peer2User: {
    userID: "USER-360-PEER-002",
    employeeID: "EMP-360-PEER-002",
    email: "emily.peer@nshrm.com",
    password: "Peer2Pass360!",
    securecode: "",
    userType: "employee",
    time_stamp: (/* @__PURE__ */ new Date()).toISOString()
  },
  // Department for 360 team
  assessment360Department: {
    deptcode: "DEPT-360",
    deptname: "360 Assessment Team"
  },
  // Goals for Target Achievement calculation (US-4.17)
  assessment360Goals: [
    {
      goalID: 36001,
      busgoal: "BG-Q1-2025",
      employee: "EMP-360-001",
      ID: "EMP-360-001",
      goal_title: "Complete API Migration",
      goal_description: "Migrate legacy APIs to new microservices architecture",
      key_result: "All 15 endpoints migrated with 99.9% uptime",
      projected_start_date: (/* @__PURE__ */ new Date("2025-01-01")).toISOString(),
      projected_target_date: (/* @__PURE__ */ new Date("2025-03-15")).toISOString(),
      actual_start_date: (/* @__PURE__ */ new Date("2025-01-05")).toISOString(),
      actual_completion_date: null,
      goal_progress: 80,
      goal_status: "In Progress",
      approval: 1,
      appraisal_period: "AP-2025-Q1",
      date_modified: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      goalID: 36002,
      busgoal: "BG-Q1-2025",
      employee: "EMP-360-001",
      ID: "EMP-360-001",
      goal_title: "Implement CI/CD Pipeline",
      goal_description: "Set up automated testing and deployment pipeline",
      key_result: "Zero-downtime deployments achieved",
      projected_start_date: (/* @__PURE__ */ new Date("2025-01-15")).toISOString(),
      projected_target_date: (/* @__PURE__ */ new Date("2025-02-28")).toISOString(),
      actual_start_date: (/* @__PURE__ */ new Date("2025-01-15")).toISOString(),
      actual_completion_date: (/* @__PURE__ */ new Date("2025-02-25")).toISOString(),
      goal_progress: 100,
      goal_status: "Completed",
      approval: 1,
      appraisal_period: "AP-2025-Q1",
      date_modified: (/* @__PURE__ */ new Date()).toISOString()
    }
  ],
  // Pre-generated 360 assessments (what the system auto-creates - US-4.15)
  // These show the criteria-based assessment format
  // NOTE: Uses normalized schema - no criteriaCategory (derivable from criteriaID), relationship replaces relationship
  assessment360Records: [
    // SELF assessment for Quality of Work
    {
      assessmentID: 36101,
      assessorID: "EMP-360-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "SELF",
      // Replaces legacy 'relationship' field
      status: "submitted",
      criteriaID: "CRIT-TE-003",
      // criteriaCategory removed - derivable from criteriaID -> PerformanceCriteria.category (3NF)
      rating: 4,
      // Renamed from criteriaRating
      comments: "I strive for high quality in all deliverables",
      // Renamed from criteriaComments
      overall_rating: 4,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // MANAGER assessment for Quality of Work
    {
      assessmentID: 36102,
      assessorID: "MGR-360-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "MANAGER",
      status: "submitted",
      criteriaID: "CRIT-TE-003",
      rating: 5,
      comments: "Consistently delivers high-quality work",
      overall_rating: 5,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // SELF assessment for Communication (Power Skills)
    {
      assessmentID: 36103,
      assessorID: "EMP-360-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "SELF",
      status: "submitted",
      criteriaID: "CRIT-PS-002",
      rating: 4,
      comments: "Good at explaining technical concepts",
      overall_rating: 4,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // MANAGER assessment for Communication (Power Skills)
    {
      assessmentID: 36104,
      assessorID: "MGR-360-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "MANAGER",
      status: "submitted",
      criteriaID: "CRIT-PS-002",
      rating: 4,
      comments: "Clear communicator, could be more proactive in updates",
      overall_rating: 4,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // SELF assessment for Teamwork (Attitude)
    {
      assessmentID: 36105,
      assessorID: "EMP-360-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "SELF",
      status: "submitted",
      criteriaID: "CRIT-AT-003",
      rating: 5,
      comments: "I actively collaborate with team members",
      overall_rating: 5,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: false,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // PEER 1 assessment for Teamwork (Attitude) - Round-robin assigned
    {
      assessmentID: 36106,
      assessorID: "EMP-360-PEER-001",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "PEER",
      status: "submitted",
      criteriaID: "CRIT-AT-003",
      rating: 5,
      comments: "Great team player, always helpful",
      overall_rating: 5,
      strengths: "Collaborative mindset",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: true,
      submitted_date: (/* @__PURE__ */ new Date()).toISOString()
    },
    // PEER 2 assessment for Problem Solving (Power Skills) - Round-robin assigned
    {
      assessmentID: 36107,
      assessorID: "EMP-360-PEER-002",
      assesseeID: "EMP-360-001",
      appraisalPeriod: "AP-2025-Q1",
      periodID: 360,
      assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
      relationship: "PEER",
      status: "pending",
      // Not yet completed
      criteriaID: "CRIT-PS-005",
      rating: 0,
      comments: "",
      overall_rating: 0,
      strengths: "",
      areas_for_improvement: "",
      additional_comments: "",
      is_anonymous: true,
      submitted_date: null
    }
  ],
  // Calculated Target Achievement (US-4.17) - System auto-computed
  assessment360TargetAchievement: {
    criteriaID: "CRIT-TE-001",
    employeeID: "EMP-360-001",
    appraisalPeriod: "AP-2025-Q1",
    calculatedScore: 90,
    // Average of goal_progress: (80 + 100) / 2 = 90
    goalsConsidered: 2,
    calculationDate: (/* @__PURE__ */ new Date()).toISOString()
  }
};
async function seedLoginAdminTestData() {
  await seedEmployee(testFixtures.loginAdminEmployee);
  await seedUser(testFixtures.loginAdminUser);
}
async function seedEmpmanTestData() {
  await seedEmployee(testFixtures.loginAdminEmployee);
  await seedUser(testFixtures.loginAdminUser);
  await seedManager(testFixtures.empmanManager);
  await seedUser(testFixtures.empmanManagerUser);
  await seedEmployee(testFixtures.empmanEmployee);
  await seedUser(testFixtures.empmanEmployeeUser);
  await seedEmployee(testFixtures.empmanEmployee2);
  await seedUser(testFixtures.empmanEmployee2User);
  await seedManager(testFixtures.reportManager);
  await seedUser(testFixtures.reportManagerUser);
  await seedEmployee(testFixtures.reportEmployee1);
  await seedEmployee(testFixtures.reportEmployee2);
}
async function seedUserDeleteTestData() {
  await seedEmployee(testFixtures.loginAdminEmployee);
  await seedUser(testFixtures.loginAdminUser);
  await seedEmployee(testFixtures.deleteReproEmployee);
  await seedUser(testFixtures.deleteReproUser);
}
async function seedSurveyManagerTestData() {
  await seedEmployee(testFixtures.surveyEmployee);
  await seedUser(testFixtures.surveyEmployeeUser);
  await seedSurvey(testFixtures.survey);
  await seedEmployee(testFixtures.surveyEmployee2);
  await seedUser(testFixtures.surveyEmployee2User);
  await seedSurvey(testFixtures.survey2);
}
async function seedReportManagerTestData() {
  await seedDepartment(testFixtures.reportDepartment);
  await seedManager(testFixtures.reportManager);
  await seedEmployee(testFixtures.reportManager);
  await seedUser(testFixtures.reportManagerUser);
  await seedEmployee(testFixtures.reportEmployee1);
  await seedEmployee(testFixtures.reportEmployee2);
  try {
    const f1 = await employeeRepository.find({ employeeID: testFixtures.reportEmployee1.employeeID });
    if (!f1 || f1.length === 0) {
      await seedEmployee(testFixtures.reportEmployee1);
    } else if (f1[0].managerID !== testFixtures.reportEmployee1.managerID) {
      try {
        await employeeRepository.remove(f1[0]);
      } catch (e) {
      }
      await seedEmployee(testFixtures.reportEmployee1);
    }
    const f2 = await employeeRepository.find({ employeeID: testFixtures.reportEmployee2.employeeID });
    if (!f2 || f2.length === 0) {
      await seedEmployee(testFixtures.reportEmployee2);
    } else if (f2[0].managerID !== testFixtures.reportEmployee2.managerID) {
      try {
        await employeeRepository.remove(f2[0]);
      } catch (e) {
      }
      await seedEmployee(testFixtures.reportEmployee2);
    }
  } catch (e) {
  }
  for (const metric of testFixtures.performanceMetrics) {
    await seedPerformanceMetric(metric);
  }
  for (const review of testFixtures.performanceReviews) {
    await seedPerformanceReview(review);
  }
  for (const criteria of testFixtures.performanceCriteria) {
    await seedPerformanceCriteria(criteria);
  }
}
async function seedDashboardPerformanceData() {
  console.log("[seedHelper] Seeding dashboard performance data for US-4.6...");
  for (const feedback of testFixtures.dashboardFeedback) {
    await seedFeedback(feedback);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.dashboardFeedback.length} feedback records`);
  console.log(`[seedHelper] Skipped legacy self-assessments (merged into PerformanceScore)`);
  for (const assessment of testFixtures.dashboardPeerAssessments) {
    await seedPeerAssessment(assessment);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.dashboardPeerAssessments.length} peer assessments`);
  for (const plan of testFixtures.dashboardDevelopmentPlans) {
    await seedDevelopmentPlan(plan);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.dashboardDevelopmentPlans.length} development plans`);
  console.log("[seedHelper] Dashboard performance data seeded successfully!");
  console.log("[seedHelper] Summary:");
  console.log("  - Feedback records with scores/grades for performance summary");
  console.log("  - Self-assessments (1 draft, 1 submitted, 1 reviewed)");
  console.log("  - Peer assessments (3 received, avg rating ~4.4)");
  console.log("  - Development plans (avg progress ~58%)");
}
async function seedGoalWorkflowTestData() {
  await seedDepartment(testFixtures.goalWorkflowDepartment);
  await seedManager(testFixtures.goalWorkflowManager);
  await seedUser(testFixtures.goalWorkflowManagerUser);
  await seedEmployee(testFixtures.goalWorkflowEmployee);
  await seedUser(testFixtures.goalWorkflowEmployeeUser);
  await seedAppraisalPeriod(testFixtures.goalWorkflowAppraisalPeriod);
  await seedBusinessGoal(testFixtures.goalWorkflowBusinessGoal);
  await seedGoal(testFixtures.goalPendingApproval);
  await seedGoal(testFixtures.goalApproved);
  await seedGoal(testFixtures.goalCompleted);
  for (const progress of testFixtures.goalProgressRecords) {
    await seedGoalProgress(progress);
  }
  await seedDevelopmentPlan(testFixtures.goalWorkflowDevelopmentPlan);
  console.log("[seedHelper] Goal workflow test data seeded successfully");
}
async function seedProfilePictureTestData() {
  await seedDepartment(testFixtures.profilePictureDepartment);
  await seedEmployee(testFixtures.profilePictureEmployee);
  await seedUser(testFixtures.profilePictureEmployeeUser);
  console.log("[seedHelper] Profile picture test data seeded successfully");
}
async function seededProfilePictureTestData() {
  await seedDepartment(testFixtures.profilePictureDepartment);
  await seedEmployee(testFixtures.seededProfileEmployee1);
  await seedUser(testFixtures.seededProfileEmployee1User);
  await seedEmployee(testFixtures.seededProfileEmployee2);
  await seedUser(testFixtures.seededProfileEmployee2User);
  await seedEmployee(testFixtures.seededProfileEmployee3);
  await seedUser(testFixtures.seededProfileEmployee3User);
  console.log("[seedHelper] Seeded profile picture test data (3 employees with existing pictures)");
}
async function simulateProfilePictureUpload(userId, imagePath) {
  const users = await userRepository.find({ userID: userId });
  if (users.length > 0) {
    const user = users[0];
    const updatedUser = {
      ...user,
      profile_picture: imagePath,
      profile_picture_updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    await userRepository.update(user.sno || user._id, updatedUser);
    return updatedUser;
  }
  return null;
}
function createMockFile(name, type, size, content) {
  const buffer = content || new Uint8Array(size);
  const blob = new Blob([buffer], { type });
  return new File([blob], name, { type });
}
function createTestImageFiles() {
  return {
    validJpeg: createMockFile("profile.jpg", "image/jpeg", 5e4),
    validPng: createMockFile("profile.png", "image/png", 75e3),
    validGif: createMockFile("profile.gif", "image/gif", 3e4),
    tooLarge: createMockFile("large.jpg", "image/jpeg", 10485760),
    // 10MB
    invalidType: createMockFile("document.pdf", "application/pdf", 1e5),
    invalidExtension: createMockFile("image.bmp", "image/bmp", 5e4)
  };
}
async function seedDemoData() {
  console.log("[seedHelper] Starting comprehensive demo data seeding...");
  for (const demoUser of testFixtures.demoUsers) {
    try {
      const existingUsers = await userRepository.find({ email: demoUser.email });
      if (existingUsers.length === 0) {
        await userRepository.add({
          userID: crypto.randomUUID(),
          employeeID: demoUser.employeeID,
          email: demoUser.email,
          password: demoUser.password,
          securecode: "",
          userType: demoUser.userType,
          time_stamp: /* @__PURE__ */ new Date()
        });
        console.log(`[seedHelper] Demo user seeded: ${demoUser.email}`);
      }
    } catch (error) {
      console.warn(`[seedHelper] Failed to seed demo user ${demoUser.email}:`, error);
    }
  }
  await seedGoalWorkflowTestData();
  await seedSurveyManagerTestData();
  await seedReportManagerTestData();
  await seedDashboardPerformanceData();
  await seededProfilePictureTestData();
  await seed360AssessmentWorkflowData();
  console.log("[seedHelper] Demo data seeding complete!");
  console.log("[seedHelper] Available demo logins:");
  testFixtures.demoUsers.forEach((u) => {
    console.log(`  - ${u.email} / ${u.password} (${u.userType})`);
  });
}
async function seed360AssessmentWorkflowData() {
  console.log("[seedHelper] Seeding 360 assessment workflow data for US-4.13-4.18...");
  for (const criteria of testFixtures.performanceCriteria) {
    await seedPerformanceCriteria(criteria);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.performanceCriteria.length} performance criteria`);
  for (const criteria of testFixtures.performanceCriteria) {
    const metric = {
      metricID: `M-${criteria.criteriaID}`,
      metricName: `${criteria.criteriaName} Metric`,
      criteriaID: criteria.criteriaID,
      weight: criteria.weight || 1,
      isGoalBased: !!criteria.isGoalBased,
      displayOrder: criteria.displayOrder || 1
    };
    await seedPerformanceMetric(metric);
  }
  for (const assessment of testFixtures.assessment360Records) {
    if (!assessment.metricID && assessment.criteriaID) {
      assessment.metricID = `M-${assessment.criteriaID}`;
    }
  }
  await seedAppraisalPeriod(testFixtures.assessment360Period);
  console.log("[seedHelper] Seeded 360 assessment period");
  await seedDepartment(testFixtures.assessment360Department);
  await seedEmployee(testFixtures.assessment360ManagerEmployee);
  await seedManager(testFixtures.assessment360Manager);
  await seedUser(testFixtures.assessment360ManagerUser);
  await seedEmployee(testFixtures.assessment360Employee);
  await seedUser(testFixtures.assessment360EmployeeUser);
  await seedEmployee(testFixtures.assessment360Peer1);
  await seedUser(testFixtures.assessment360Peer1User);
  await seedEmployee(testFixtures.assessment360Peer2);
  await seedUser(testFixtures.assessment360Peer2User);
  console.log("[seedHelper] Seeded 360 team: 1 manager, 1 target employee, 2 peers");
  for (const goal of testFixtures.assessment360Goals) {
    await seedGoal(goal);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.assessment360Goals.length} goals for Target Achievement`);
  for (const assessment of testFixtures.assessment360Records) {
    await seedPeerAssessment(assessment);
  }
  console.log(`[seedHelper] Seeded ${testFixtures.assessment360Records.length} criteria-based 360 assessments`);
  async function ensureAssessmentsForEmployee(assesseeId, assesseeEmail) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const existingEmployees = await employeeRepository.find({ employeeID: assesseeId });
    if (existingEmployees.length === 0) {
      let fixtureByEmail = Object.values(testFixtures).find((f) => f && f.email === assesseeEmail && f.employeeID);
      if (!fixtureByEmail && Array.isArray(testFixtures.demoUsers)) {
        fixtureByEmail = testFixtures.demoUsers.find((u) => u.email === assesseeEmail);
      }
      if (fixtureByEmail) {
        const employeeObj = fixtureByEmail.employeeID && fixtureByEmail.email && fixtureByEmail.firstname ? fixtureByEmail : {
          employeeID: fixtureByEmail.employeeID,
          email: fixtureByEmail.email,
          firstname: fixtureByEmail.firstname || fixtureByEmail.name || "Demo",
          lastname: fixtureByEmail.lastname || "",
          staff_name: fixtureByEmail.name || `${fixtureByEmail.firstname || "Demo"} ${fixtureByEmail.lastname || ""}`,
          deptcode: fixtureByEmail.deptcode || "DEMO",
          managerID: fixtureByEmail.managerID || testFixtures.assessment360Manager.managerID || "",
          status: "active"
        };
        await seedEmployee(employeeObj);
        await seedUser({ userID: fixtureByEmail.userID || `USER-${employeeObj.employeeID}`, employeeID: employeeObj.employeeID, email: employeeObj.email, password: fixtureByEmail.password || "password", userType: "employee" });
      }
    }
    const existingAssessments = await peerAssessmentRepository.find({ assesseeID: assesseeId });
    const managerId = (_a = testFixtures.assessment360Manager) == null ? void 0 : _a.managerID;
    const hasManagerFromConfigured = existingAssessments.some((a) => a.assessorID === managerId && (a.relationship && a.relationship === "MANAGER" || a.relationship && a.relationship.toLowerCase() === "manager"));
    if (!hasManagerFromConfigured && managerId) {
      const managerAssessment = {
        assessorID: managerId,
        assesseeID: assesseeId,
        appraisalPeriod: "AP-2025-Q1",
        assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
        relationship: "MANAGER",
        relationship: "manager",
        status: "submitted",
        criteriaID: ((_b = testFixtures.performanceCriteria[0]) == null ? void 0 : _b.criteriaID) || ((_c = testFixtures.performanceCriteria[0]) == null ? void 0 : _c.criteriaID),
        rating: 4,
        overall_rating: 4,
        comments: "Manager assessment (auto-seed)"
      };
      await seedPeerAssessment(managerAssessment);
      console.log(`[seedHelper] Seeded manager assessment for ${assesseeId} from manager ${managerId}`);
    }
    const peerIds = [(_d = testFixtures.assessment360Peer1) == null ? void 0 : _d.employeeID, (_e = testFixtures.assessment360Peer2) == null ? void 0 : _e.employeeID].filter(Boolean);
    let existingPeerAssessorIds = existingAssessments.filter((a) => a.relationship === "PEER" || a.relationship && a.relationship.toLowerCase() === "peer").map((a) => a.assessorID);
    for (const pid of peerIds) {
      if (existingPeerAssessorIds.indexOf(pid) === -1) {
        const peerAssessment = {
          assessorID: pid,
          assesseeID: assesseeId,
          appraisalPeriod: "AP-2025-Q1",
          assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
          relationship: "PEER",
          relationship: "peer",
          status: "submitted",
          criteriaID: ((_f = testFixtures.performanceCriteria[2]) == null ? void 0 : _f.criteriaID) || ((_g = testFixtures.performanceCriteria[0]) == null ? void 0 : _g.criteriaID),
          rating: 4,
          overall_rating: 4,
          comments: "Peer assessment (auto-seed)",
          is_anonymous: true
        };
        await seedPeerAssessment(peerAssessment);
        console.log(`[seedHelper] Seeded peer assessment from ${pid} for ${assesseeId}`);
        existingPeerAssessorIds.push(pid);
      }
    }
    while (existingPeerAssessorIds.length < 2 && peerIds.length > 0) {
      const pid = peerIds[existingPeerAssessorIds.length % peerIds.length];
      const peerAssessment = {
        assessorID: pid,
        assesseeID: assesseeId,
        appraisalPeriod: "AP-2025-Q1",
        assessment_date: (/* @__PURE__ */ new Date()).toISOString(),
        relationship: "PEER",
        relationship: "peer",
        status: "submitted",
        criteriaID: ((_h = testFixtures.performanceCriteria[2]) == null ? void 0 : _h.criteriaID) || ((_i = testFixtures.performanceCriteria[0]) == null ? void 0 : _i.criteriaID),
        rating: 4,
        overall_rating: 4,
        comments: "Peer assessment (auto-seed)",
        is_anonymous: true
      };
      await seedPeerAssessment(peerAssessment);
      console.log(`[seedHelper] Seeded additional peer assessment from ${pid} for ${assesseeId}`);
      existingPeerAssessorIds.push(pid);
    }
  }
  await ensureAssessmentsForEmployee(testFixtures.assessment360Employee.employeeID, testFixtures.assessment360Employee.email);
  const demoEmployeeUser = Array.isArray(testFixtures.demoUsers) ? testFixtures.demoUsers.find((u) => u.email === "employee@nshrm.com") : null;
  if (demoEmployeeUser) {
    await ensureAssessmentsForEmployee(demoEmployeeUser.employeeID, demoEmployeeUser.email);
  } else {
    console.warn("[seedHelper] demo user with email employee@nshrm.com not found in testFixtures.demoUsers");
  }
  console.log("[seedHelper] 360 Assessment workflow data seeded successfully!");
  console.log("[seedHelper] Summary:");
  console.log("  - 15 performance criteria (5 Task Execution, 5 Power Skills, 5 Attitude)");
  console.log("  - 1 active assessment period with 5 selected criteria");
  console.log("  - 1 manager + 1 target employee + 2 peers (for round-robin)");
  console.log("  - 2 goals with avg 90% progress (for Target Achievement)");
  console.log("  - 7 pre-generated assessments (self, manager, peer)");
  console.log("[seedHelper] Demo logins for 360:");
  console.log(`  - ${testFixtures.assessment360ManagerUser.email} / ${testFixtures.assessment360ManagerUser.password} (manager)`);
  console.log(`  - ${testFixtures.assessment360EmployeeUser.email} / ${testFixtures.assessment360EmployeeUser.password} (employee)`);
  console.log(`  - ${testFixtures.assessment360Peer1User.email} / ${testFixtures.assessment360Peer1User.password} (peer)`);
}
async function clearTestData() {
  if (typeof userRepository.clearAll === "function") await userRepository.clearAll();
  if (typeof employeeRepository.clearAll === "function") await employeeRepository.clearAll();
  if (typeof managerRepository.clearAll === "function") await managerRepository.clearAll();
  if (typeof businessGoalRepository.clearAll === "function") await businessGoalRepository.clearAll();
  if (typeof goalRepository.clearAll === "function") await goalRepository.clearAll();
  if (typeof developmentPlanRepository.clearAll === "function") await developmentPlanRepository.clearAll();
  if (typeof appraisalPeriodRepository.clearAll === "function") await appraisalPeriodRepository.clearAll();
  if (typeof goalProgressRepository.clearAll === "function") await goalProgressRepository.clearAll();
  if (typeof feedbackRepository.clearAll === "function") await feedbackRepository.clearAll();
  if (typeof performanceReviewRepository.clearAll === "function") await performanceReviewRepository.clearAll();
  if (typeof performanceMetricRepository.clearAll === "function") await performanceMetricRepository.clearAll();
  if (typeof performanceCriteriaRepository.clearAll === "function") await performanceCriteriaRepository.clearAll();
  if (typeof departmentRepository.clearAll === "function") await departmentRepository.clearAll();
  if (typeof peerAssessmentRepository.clearAll === "function") await peerAssessmentRepository.clearAll();
  if (typeof performanceScoreRepository.clearAll === "function") await performanceScoreRepository.clearAll();
}
const seedHelper = {
  // Repository seed functions
  seedEmployee,
  seedManager,
  seedUser,
  createUserAndLogin,
  seedBusinessGoal,
  seedGoal,
  seedDevelopmentPlan,
  seedAppraisalPeriod,
  seedGoalProgress,
  seedSurvey,
  seedSurveyResponse,
  seedPerformanceMetric,
  seedPerformanceReview,
  seedPerformanceCriteria,
  seedDepartment,
  seedFeedback,
  seedPerformanceScore,
  // Replaces seedSelfAssessment (merged into PerformanceScore)
  seedPeerAssessment,
  // Batch seeding utilities
  seedLoginAdminTestData,
  seedEmpmanTestData,
  seedUserDeleteTestData,
  seedSurveyManagerTestData,
  seedReportManagerTestData,
  seedGoalWorkflowTestData,
  seedProfilePictureTestData,
  // Profile picture upload workflow (no pictures initially)
  seededProfilePictureTestData,
  // Employees with existing profile pictures
  seedDashboardPerformanceData,
  // US-4.6 Performance Feedback dashboard data
  seed360AssessmentWorkflowData,
  // US-4.13-4.18 Criteria-based 360 assessment workflow
  seedDemoData,
  clearTestData,
  updateEmployeeDept,
  // Profile picture utilities
  simulateProfilePictureUpload,
  createMockFile,
  createTestImageFiles,
  // Test fixtures
  testFixtures
};
export {
  clearTestData,
  createMockFile,
  createTestImageFiles,
  createUserAndLogin,
  seedHelper as default,
  seed360AssessmentWorkflowData,
  seedAppraisalPeriod,
  seedBusinessGoal,
  seedDashboardPerformanceData,
  seedDemoData,
  seedDepartment,
  seedDevelopmentPlan,
  seedEmployee,
  seedEmpmanTestData,
  seedFeedback,
  seedGoal,
  seedGoalProgress,
  seedGoalWorkflowTestData,
  seedLoginAdminTestData,
  seedManager,
  seedPeerAssessment,
  seedPerformanceCriteria,
  seedPerformanceMetric,
  seedPerformanceReview,
  seedPerformanceScore,
  seedProfilePictureTestData,
  seedReportManagerTestData,
  seedSurvey,
  seedSurveyManagerTestData,
  seedSurveyResponse,
  seedUser,
  seedUserDeleteTestData,
  seededProfilePictureTestData,
  simulateProfilePictureUpload,
  testFixtures,
  updateEmployeeDept
};
