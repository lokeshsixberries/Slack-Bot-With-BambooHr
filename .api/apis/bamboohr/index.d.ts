import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get employee data by specifying a set of fields. This is suitable for getting basic
     * employee information, including current values for fields that are part of a historical
     * table, like job title, or compensation information. See the
     * [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
     *
     * @summary Get Employee
     */
    getEmployee(metadata: types.GetEmployeeMetadataParam): Promise<FetchResponse<200, types.GetEmployeeResponse200>>;
    /**
     * Update an employee, based on employee ID. If employee is currently on a pay schedule
     * syncing with Trax Payroll, or being added to one, the API user will need to update the
     * employee with all of the following required fields for the update to be successful
     * (listed by API field name): employeeNumber, firstName, lastName, dateOfBirth, ssn,
     * gender, maritalStatus, hireDate, address1, city, state, country,
     * employmentHistoryStatus, exempt, payType, payRate, payPer, location, department, and
     * division.
     *
     * @summary Update Employee
     */
    updateEmployee(body: types.UpdateEmployeeBodyParam, metadata: types.UpdateEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a new employee. New employees must have at least a first name and a last name. The
     * ID of the newly created employee is included in the Location header of the response.
     * Other fields can be included. Please see the [fields](ref:metadata-get-a-list-of-fields)
     * endpoint. New Employees added to a pay schedule synced with Trax Payroll must have the
     * following required fields (listed by API field name): employeeNumber, firstName,
     * lastName, dateOfBirth, ssn, gender, maritalStatus, hireDate, address1, city, state,
     * country, employmentHistoryStatus, exempt, payType, payRate, payPer, location,
     * department, and division.
     *
     * @summary Add Employee
     */
    addEmployee(body: types.AddEmployeeBodyParam, metadata: types.AddEmployeeMetadataParam): Promise<FetchResponse<201, types.AddEmployeeResponse201>>;
    /**
     * Gets employee directory.
     *
     * @summary Get Employee Directory
     */
    getEmployeesDirectory(metadata: types.GetEmployeesDirectoryMetadataParam): Promise<FetchResponse<200, types.GetEmployeesDirectoryResponse200>>;
    /**
     * Lists employee files and categories
     *
     * @summary List employee files and categories
     */
    listEmployeeFiles(metadata: types.ListEmployeeFilesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an employee file category.
     *
     * @summary Add Employee File Category
     */
    addEmployeeFileCategory(body: types.AddEmployeeFileCategoryBodyParam, metadata: types.AddEmployeeFileCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update an employee file
     *
     * @summary Update Employee File
     */
    updateEmployeeFile(body: types.UpdateEmployeeFileBodyParam, metadata: types.UpdateEmployeeFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an employee file
     *
     * @summary Delete Employee File
     */
    deleteEmployeeFile(metadata: types.DeleteEmployeeFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Gets an employee file
     *
     * @summary Get an Employee File
     */
    getEmployeeFile(metadata: types.GetEmployeeFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Upload an employee file
     *
     * @summary Upload Employee File
     */
    uploadEmployeeFile(metadata: types.UploadEmployeeFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Lists company files and categories
     *
     * @summary List company files and categories
     */
    listCompanyFiles(metadata: types.ListCompanyFilesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a company file category.
     *
     * @summary Add Company File Category
     */
    addCompanyFileCategory(body: types.AddCompanyFileCategoryBodyParam, metadata: types.AddCompanyFileCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update a company file
     *
     * @summary Update Company File
     */
    updateCompanyFile(body: types.UpdateCompanyFileBodyParam, metadata: types.UpdateCompanyFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a company file
     *
     * @summary Delete Company File
     */
    deleteCompanyFile(metadata: types.DeleteCompanyFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Gets an company file
     *
     * @summary Get an Company File
     */
    getCompanyFile(metadata: types.GetCompanyFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Upload a company file
     *
     * @summary Upload Company File
     */
    uploadCompanyFile(metadata: types.UploadCompanyFileMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this resource to request one of your existing custom company reports from the My
     * Reports or Manage Reports sections in the Reports tab. You can get the report number by
     * hovering over the report name and noting the ID from the URL. At present, only reports
     * from the My Reports or Manage Reports sections are supported. In the future we may
     * implement reports from the Standard Reports section if there is enough demand for it.
     * The report numbers used in this request are different in each company.
     *
     * @summary Get company report
     */
    getCompanyReport(metadata: types.GetCompanyReportMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this resource to request BambooHR generate a report. You must specify a type of
     * either "PDF", "XLS", "CSV", "JSON", or "XML". You must specify a list of fields to show
     * on the report. The list of fields is available here. The custom report will return
     * employees regardless of their status, "Active" or "Inactive". This differs from the UI,
     * which by default applies a quick filter to display only "Active" employees.
     *
     * @summary Request a custom report
     */
    requestCustomReport(body: types.RequestCustomReportBodyParam, metadata: types.RequestCustomReportMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a data structure representing all the table rows for a given employee and table
     * combination. The result is not sorted in any particular order.
     *
     * @summary Gets table rows for a given employee and table combination
     */
    getEmployeeTableRow(metadata: types.GetEmployeeTableRowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds a table row. If employee is currently on a pay schedule syncing with Trax Payroll,
     * or being added to one, the row cannot be added if they are missing any required fields
     * for that table. If the API user is adding a row on the compensation table, the row
     * cannot be added if they are missing any of the required employee fields (including
     * fields not on that table).
     *
     * @summary Adds a table row
     */
    addEmployeeTableRow(body: types.AddEmployeeTableRowBodyParam, metadata: types.AddEmployeeTableRowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Updates a table row. If employee is currently on a pay schedule syncing with Trax
     * Payroll, or being added to one, the row cannot be added if they are missing any required
     * fields for that table. If the API user is updating a row on the compensation table, the
     * row cannot be updated if they are missing any of the required employee fields (including
     * fields not on that table).
     *
     * @summary Updates a table row.
     */
    updateEmployeeTableRow(body: types.UpdateEmployeeTableRowBodyParam, metadata: types.UpdateEmployeeTableRowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a table row
     *
     * @summary Deletes a table row
     */
    deleteEmployeeTableRowV1(metadata: types.DeleteEmployeeTableRowV1MetadataParam): Promise<FetchResponse<200, types.DeleteEmployeeTableRowV1Response200>>;
    /**
     * Updates a table row. Fundamentally the same as version 1 so choose a version and stay
     * with it unless other changes occur. Changes from version 1 are now minor with a few
     * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
     * date.
     *
     * @summary Updates a table row.
     */
    updateEmployeeTableRowV(body: types.UpdateEmployeeTableRowVBodyParam, metadata: types.UpdateEmployeeTableRowVMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds a table row. Fundamentally the same as version 1 so choose a version and stay with
     * it unless other changes occur. Changes from version 1 are now minor with a few
     * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
     * date.
     *
     * @summary Adds a table row
     */
    addEmployeeTableRowV1(body: types.AddEmployeeTableRowV1BodyParam, metadata: types.AddEmployeeTableRowV1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This API is merely an optimization to avoid downloading all table data for all
     * employees. When you use this API you will provide a timestamp and the results will be
     * limited to just the employees that have changed since the time you provided. This API
     * operates on an employee-last-changed-timestamp, which means that a change in ANY field
     * in the employee record will cause ALL of that employees table rows to show up via this
     * API.
     *
     * @summary Gets all updated employee table data
     */
    getChangedEmployeeTableData(metadata: types.GetChangedEmployeeTableDataMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint can help with discovery of fields that are available in an account.
     *
     * @summary Get a list of fields
     */
    metadataGetAListOfFields(metadata: types.MetadataGetAListOfFieldsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint can help discover table fields available in your BambooHR account.
     *
     * @summary Get a list of tabular fields
     */
    metadataGetAListOfTabularFields(metadata: types.MetadataGetAListOfTabularFieldsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint will return details for all list fields. Lists that can be edited will
     * have the "manageable" attribute set to yes. Lists with the "multiple" attribute set to
     * yes are fields that can have multiple values. Options with the "archived" attribute set
     * to yes should not appear as current options, but are included so that historical data
     * can reference the value.
     *
     * @summary Get details for list fields
     */
    metadataGetDetailsForListFields(metadata: types.MetadataGetDetailsForListFieldsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This resource accepts one or more options. To update an option, specify an ID. You may
     * also remove an option from the list of current values by archiving the value. To create
     * a new option, do not specify an "id" attribute.
     *
     * @summary Add or Update Values for List Fields
     */
    metadataAddOrUpdateValuesForListFields(body: types.MetadataAddOrUpdateValuesForListFieldsBodyParam, metadata: types.MetadataAddOrUpdateValuesForListFieldsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a List of Users
     *
     */
    getAListOfUsers(metadata: types.GetAListOfUsersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint gets a list of time off types.
     *
     * @summary Get Time Off Types
     */
    getTimeOffTypes(metadata: types.GetTimeOffTypesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint gets a list of time off policies.
     *
     * @summary Get Time Off Policies
     */
    getTimeOffPolicies(metadata: types.GetTimeOffPoliciesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Time Off Requests
     *
     */
    timeOffGetTimeOffRequests(metadata: types.TimeOffGetTimeOffRequestsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * A time off request is an entity that describes the decision making process for approving
     * time off. Once a request has been created, a history entry can be created documenting
     * the actual use of time off.
     *
     * @summary Add a Time Off Request
     */
    timeOffAddATimeOffRequest(body: types.TimeOffAddATimeOffRequestBodyParam, metadata: types.TimeOffAddATimeOffRequestMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint allows you to change the status of a request in the system. You can use
     * this to approve, deny, or cancel a time off request.
     *
     * @summary Change a Request Status
     */
    timeOffChangeARequestStatus(body: types.TimeOffChangeARequestStatusBodyParam, metadata: types.TimeOffChangeARequestStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A new time off history item will be inserted into the database. On success, a 201
     * Created code is returned and the "Location" header of the response will contain a URL
     * that identifies the new history item.
     *
     * @summary Add a Time Off History Item For Time Off Request
     */
    timeOffAddATimeOffHistoryItemForTimeOffRequest(body: types.TimeOffAddATimeOffHistoryItemForTimeOffRequestBodyParam, metadata: types.TimeOffAddATimeOffHistoryItemForTimeOffRequestMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off balance adjustment will be inserted into the database. On success, a
     * 201 Created code is returned and the "Location" header of the response will contain a
     * URL that identifies the new history item.
     *
     * @summary Adjust Time Off Balance
     */
    timeOffAdjustTimeOffBalance(body: types.TimeOffAdjustTimeOffBalanceBodyParam, metadata: types.TimeOffAdjustTimeOffBalanceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List Time Off Policies for Employee
     *
     */
    timeOffListTimeOffPoliciesForEmployee(metadata: types.TimeOffListTimeOffPoliciesForEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off policy will be assigned to the employee with accruals starting on the
     * date specified. A null start date will remove the assignment. On success, a 200 Success
     * code is returned and the content of the response will be the same as the List Time off
     * Policies API.
     *
     * @summary Assign Time Off Policies for an Employee
     */
    timeOffAssignTimeOffPoliciesForAnEmployee(body: types.TimeOffAssignTimeOffPoliciesForAnEmployeeBodyParam, metadata: types.TimeOffAssignTimeOffPoliciesForAnEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List Time Off Policies for Employee, Version 1.1
     *
     */
    timeOffV11ListTimeOffPoliciesForEmployee(metadata: types.TimeOffV11ListTimeOffPoliciesForEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off policy will be assigned to the employee with accruals starting on the
     * date specified. On success, a 200 Success code is returned and the content of the
     * response will be the same as the List Time off Policies API.
     *
     * @summary Assign Time Off Policies for an Employee, Version 1.1
     */
    timeOffV11AssignTimeOffPoliciesForAnEmployee(body: types.TimeOffV11AssignTimeOffPoliciesForAnEmployeeBodyParam, metadata: types.TimeOffV11AssignTimeOffPoliciesForAnEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint will sum future time off accruals, scheduled time off, and carry-over
     * events to produce estimates for the anticipated time off balance on a given date in the
     * future.
     *
     * @summary Estimate Future Time Off Balances
     */
    estimateFutureTimeOffBalances(metadata: types.EstimateFutureTimeOffBalancesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint will return a list, sorted by date, of employees who will be out, and
     * company holidays, for a period of time.
     *
     * @summary Get a list of Who's Out
     */
    getAListOfWhoSOut(metadata: types.GetAListOfWhoSOutMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an employee photo
     *
     * @summary Get an employee photo
     */
    getEmployeePhoto(metadata: types.GetEmployeePhotoMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Store a new employee photo
     *
     * @summary Store a new employee photo
     */
    uploadEmployeePhoto(metadata: types.UploadEmployeePhotoMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This API allows for efficient syncing of employee data. When you use this API you will
     * provide a timestamp and the results will be limited to just the employees that have
     * changed since the time you provided. This API operates on an
     * employee-last-changed-timestamp, which means that a change in ANY individual field in
     * the employee record, as well as any change to the employment status, job info, or
     * compensation tables, will cause that employee to be returned via this API.
     *
     * @summary Gets all updated employee IDs
     */
    getChangedEmployeeIds(metadata: types.GetChangedEmployeeIdsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * User Login
     *
     * @summary User Login
     */
    login(body: types.LoginFormDataParam, metadata: types.LoginMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit deduction types
     *
     * @summary Get benefit deduction types
     */
    getBenefitDeductionTypes(metadata: types.GetBenefitDeductionTypesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of company benefits
     *
     * @summary Get a list of company benefits
     */
    getCompanyBenefits(metadata: types.GetCompanyBenefitsMetadataParam): Promise<FetchResponse<200, types.GetCompanyBenefitsResponse200>>;
    /**
     * Add a new company benefit
     *
     * @summary Add a new company benefit
     */
    addNewCompanyBenefit(body: types.AddNewCompanyBenefitFormDataParam, metadata: types.AddNewCompanyBenefitMetadataParam): Promise<FetchResponse<200, types.AddNewCompanyBenefitResponse200>>;
    /**
     * Get a company benefit
     *
     * @summary Get a company benefit
     */
    getCompanyBenefit(metadata: types.GetCompanyBenefitMetadataParam): Promise<FetchResponse<200, types.GetCompanyBenefitResponse200>>;
    /**
     * Update a company benefit
     *
     * @summary Update a company benefit
     */
    updateCompanyBenefit(body: types.UpdateCompanyBenefitBodyParam, metadata: types.UpdateCompanyBenefitMetadataParam): Promise<FetchResponse<200, types.UpdateCompanyBenefitResponse200>>;
    /**
     * Delete a company benefit
     *
     * @summary Delete a company benefit
     */
    deleteCompanyBenefit(metadata: types.DeleteCompanyBenefitMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update a company benefit
     *
     * @summary Update a company benefit
     */
    updateCompanyBenefitProperties(body: types.UpdateCompanyBenefitPropertiesBodyParam, metadata: types.UpdateCompanyBenefitPropertiesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of company benefit types
     *
     * @summary Get a list of company benefit types
     */
    getCompanyBenefitTypes(metadata: types.GetCompanyBenefitTypesMetadataParam): Promise<FetchResponse<200, types.GetCompanyBenefitTypesResponse200>>;
    /**
     * Get a list of employee benefits
     *
     * @summary Get a list of employee benefits
     */
    getEmployeeBenefit(body: types.GetEmployeeBenefitBodyParam, metadata: types.GetEmployeeBenefitMetadataParam): Promise<FetchResponse<200, types.GetEmployeeBenefitResponse200>>;
    getEmployeeBenefit(metadata: types.GetEmployeeBenefitMetadataParam): Promise<FetchResponse<200, types.GetEmployeeBenefitResponse200>>;
    /**
     * Add an employee benefit
     *
     * @summary Add an employee benefit
     */
    postEmployeeBenefit(body: types.PostEmployeeBenefitBodyParam, metadata: types.PostEmployeeBenefitMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit coverages
     *
     * @summary Get benefit coverages
     */
    getBenefitCoverages(metadata: types.GetBenefitCoveragesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get employee dependent
     *
     * @summary Get employee dependent
     */
    getEmployeeDependent(metadata: types.GetEmployeeDependentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This API allows you to change the information for a given dependent ID.
     *
     * @summary Update an employee dependent
     */
    updateEmployeeDependent(body: types.UpdateEmployeeDependentBodyParam, metadata: types.UpdateEmployeeDependentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all employee dependents
     *
     * @summary Get all employee dependents
     */
    getEmployeeDependents(metadata: types.GetEmployeeDependentsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds an employee dependent
     *
     * @summary Add an employee dependent
     */
    addEmployeeDependent(body: types.AddEmployeeDependentBodyParam, metadata: types.AddEmployeeDependentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit plans
     *
     * @summary Get benefit plans
     */
    getBenefitPlans(metadata: types.GetBenefitPlansMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit plan coverages
     *
     * @summary Get benefit plan coverages
     */
    getBenefitPlanCoverages(metadata: types.GetBenefitPlanCoveragesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit groups
     *
     * @summary Get benefit groups
     */
    getBenefitGroups(metadata: types.GetBenefitGroupsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit group employees
     *
     * @summary Get benefit group employees
     */
    getBenefitGroupEmployees(metadata: types.GetBenefitGroupEmployeesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a benefit group employee
     *
     * @summary Add a benefit group employee
     */
    addBenefitGroupEmployee(body: types.AddBenefitGroupEmployeeBodyParam, metadata: types.AddBenefitGroupEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit group plans
     *
     * @summary Get benefit group plans
     */
    getBenefitGroupPlans(metadata: types.GetBenefitGroupPlansMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit group plan costs
     *
     * @summary Get benefit group plan costs
     */
    getBenefitGroupPlanCosts(metadata: types.GetBenefitGroupPlanCostsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get employee deductions by benefit plan
     *
     * @summary Get employee deductions by benefit plan
     */
    getEmployeeDeductionsByPlan(metadata: types.GetEmployeeDeductionsByPlanMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit plan deductions by employee
     *
     * @summary Get benefit plan deductions by employee
     */
    getPlanDeductionsByEmployee(metadata: types.GetPlanDeductionsByEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get benefit deductions for employee
     *
     * @summary Get benefit deductions for employee
     */
    getPayrollDeductionsForEmployee(metadata: types.GetPayrollDeductionsForEmployeeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an employee's default withholdings
     *
     * @summary Get an employee's default withholdings
     */
    getEmployeeWithholdings(metadata: types.GetEmployeeWithholdingsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an employee's default withholdings
     *
     * @summary Add an employee's default withholdings
     */
    addEmployeeWithholding(body: types.AddEmployeeWithholdingBodyParam, metadata: types.AddEmployeeWithholdingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clear an employee's default withholdings
     *
     * @summary Clear an employee's default withholdings
     */
    clearEmployeeWithholding(metadata: types.ClearEmployeeWithholdingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an employee's direct deposit information
     *
     * @summary Get an employee's direct deposit information
     */
    getEmployeeDepositAccounts(metadata: types.GetEmployeeDepositAccountsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an employee's direct deposit information
     *
     * @summary Add an employee's direct deposit information
     */
    addEmployeeDeposit(body: types.AddEmployeeDepositBodyParam, metadata: types.AddEmployeeDepositMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clear an employee's direct deposit information
     *
     * @summary Clear an employee's direct deposit information
     */
    clearEmployeeDeposit(metadata: types.ClearEmployeeDepositMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an employee's unpaid paystubs
     *
     * @summary Get an employee's unpaid paystubs
     */
    getEmployeeUnpaidPaystubs(metadata: types.GetEmployeeUnpaidPaystubsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clear an employee's unpaid paystubs
     *
     * @summary Clear an employee's unpaid paystubs
     * @throws FetchError<400, types.ClearEmployeeUnpaidPaystubsResponse400> Unauthorized
     * @throws FetchError<403, types.ClearEmployeeUnpaidPaystubsResponse403> Forbidden
     */
    clearEmployeeUnpaidPaystubs(metadata: types.ClearEmployeeUnpaidPaystubsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an employee's unpaid paystubs
     *
     * @summary Add an employee's unpaid paystubs
     */
    addEmployeeUnpaidPaystubs(body: types.AddEmployeeUnpaidPaystubsBodyParam, metadata: types.AddEmployeeUnpaidPaystubsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an employee's paystub
     *
     * @summary Get an employee's paystub
     */
    getEmployeePaystub(metadata: types.GetEmployeePaystubMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an employee's paystub
     *
     * @summary Delete an employee's paystub
     */
    clearEmployeePaystub(metadata: types.ClearEmployeePaystubMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an employee's paystub
     *
     * @summary Add an employee's paystub
     */
    addEmployeePaystub(body: types.AddEmployeePaystubBodyParam, metadata: types.AddEmployeePaystubMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get an hour record
     *
     * @summary Get an hour record
     */
    getHourRecord(metadata: types.GetHourRecordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add an hour record
     *
     * @summary Add an hour record
     */
    addHourRecord(body: types.AddHourRecordBodyParam, metadata: types.AddHourRecordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Edit an hour record
     *
     * @summary Edit an hour record
     */
    editHourRecord(body: types.EditHourRecordBodyParam, metadata: types.EditHourRecordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an hour record
     *
     * @summary Delete an hour record
     */
    deleteHourRecord(metadata: types.DeleteHourRecordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Bulk add/edit hour records
     *
     * @summary Bulk add/edit hour records
     */
    bulkRecordHours(body: types.BulkRecordHoursBodyParam, metadata: types.BulkRecordHoursMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Approve employee timesheets
     *
     * @summary Approve employee timesheets
     */
    approveEmployeeTimesheets(body: types.ApproveEmployeeTimesheetsBodyParam, metadata: types.ApproveEmployeeTimesheetsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Approve timesheets for employees that are currently clocked in
     *
     * @summary Approve timesheets for employees that are currently clocked in
     */
    clockOutAndApproveEmployeeTimesheets(body: types.ClockOutAndApproveEmployeeTimesheetsBodyParam, metadata: types.ClockOutAndApproveEmployeeTimesheetsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get timesheets by ids
     *
     * @summary Get timesheets by ids
     */
    getTimesheets(body: types.GetTimesheetsBodyParam, metadata: types.GetTimesheetsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clock in (employee id optional)
     *
     * @summary Clock in (employee id optional)
     */
    clockIn(body: types.ClockInBodyParam, metadata: types.ClockInMetadataParam): Promise<FetchResponse<number, unknown>>;
    clockIn(metadata: types.ClockInMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clock out (employee id optional)
     *
     * @summary Clock out (employee id optional)
     */
    clockOut(body: types.ClockOutBodyParam, metadata: types.ClockOutMetadataParam): Promise<FetchResponse<number, unknown>>;
    clockOut(metadata: types.ClockOutMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Store daily entries
     *
     * @summary Store daily entries
     */
    storeDailyEntries(body: types.StoreDailyEntriesBodyParam, metadata: types.StoreDailyEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    storeDailyEntries(metadata: types.StoreDailyEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Store clock entries
     *
     * @summary Store clock entries
     */
    storeClockEntries(body: types.StoreClockEntriesBodyParam, metadata: types.StoreClockEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    storeClockEntries(metadata: types.StoreClockEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete clock entries
     *
     * @summary Delete clock entries
     */
    deleteClockEntries(body: types.DeleteClockEntriesBodyParam, metadata: types.DeleteClockEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a timesheet for an employee
     *
     * @summary Get a timesheet for an employee
     */
    getEmployeeTimesheet(metadata: types.GetEmployeeTimesheetMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a daily entry
     *
     * @summary Get a daily entry
     */
    getDailyEntry(metadata: types.GetDailyEntryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a clock entry
     *
     * @summary Get a clock entry
     */
    getClockEntry(metadata: types.GetClockEntryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Is employee clocked in?
     *
     * @summary Is employee clocked in?
     */
    isEmployeeClockedIn(metadata: types.IsEmployeeClockedInMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clock out an employee at a specific time
     *
     * @summary Clock out an employee at a specific time
     */
    clockOutEmployeeAtSpecificTime(body: types.ClockOutEmployeeAtSpecificTimeBodyParam, metadata: types.ClockOutEmployeeAtSpecificTimeMetadataParam): Promise<FetchResponse<number, unknown>>;
    clockOutEmployeeAtSpecificTime(metadata: types.ClockOutEmployeeAtSpecificTimeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Edit information on the currently clocked in entry
     *
     * @summary Edit information on the currently clocked in entry
     */
    clockInData(body: types.ClockInDataBodyParam, metadata: types.ClockInDataMetadataParam): Promise<FetchResponse<number, unknown>>;
    clockInData(metadata: types.ClockInDataMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get projects an employee can log time to
     *
     * @summary Get projects an employee can log time to
     */
    timeTrackingEmployeeProjects(metadata: types.TimeTrackingEmployeeProjectsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get tasks for a project
     *
     * @summary Get tasks for a project
     */
    timeTrackingProjectTasks(metadata: types.TimeTrackingProjectTasksMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all timesheet entries for a given period of time.
     *
     * @summary Get Timesheet Entries
     */
    getTimesheetEntries(metadata: types.GetTimesheetEntriesMetadataParam): Promise<FetchResponse<200, types.GetTimesheetEntriesResponse200>>;
    /**
     * Add or edit timesheet clock entries.
     *
     * @summary Add/Edit Timesheet Clock Entries
     */
    storeTimesheetClockEntries(body: types.StoreTimesheetClockEntriesBodyParam, metadata: types.StoreTimesheetClockEntriesMetadataParam): Promise<FetchResponse<201, types.StoreTimesheetClockEntriesResponse201>>;
    /**
     * Delete timesheet clock entries.
     *
     * @summary Delete Timesheet Clock Entries
     */
    deleteTimesheetClockEntries(body: types.DeleteTimesheetClockEntriesBodyParam, metadata: types.DeleteTimesheetClockEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add or edit timesheet hour entries.
     *
     * @summary Add/Edit Timesheet Hour Entries
     */
    storeTimesheetHourEntries(body: types.StoreTimesheetHourEntriesBodyParam, metadata: types.StoreTimesheetHourEntriesMetadataParam): Promise<FetchResponse<201, types.StoreTimesheetHourEntriesResponse201>>;
    /**
     * Delete timesheet hour entries.
     *
     * @summary Delete Timesheet Hour Entries
     */
    deleteTimesheetHourEntries(body: types.DeleteTimesheetHourEntriesBodyParam, metadata: types.DeleteTimesheetHourEntriesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Clock in an employee.
     *
     * @summary Add Timesheet Clock-In Entry
     */
    clockInEmployee(body: types.ClockInEmployeeBodyParam, metadata: types.ClockInEmployeeMetadataParam): Promise<FetchResponse<200, types.ClockInEmployeeResponse200>>;
    clockInEmployee(metadata: types.ClockInEmployeeMetadataParam): Promise<FetchResponse<200, types.ClockInEmployeeResponse200>>;
    /**
     * Clock out an employee.
     *
     * @summary Add Timesheet Clock-Out Entry
     */
    clockOutEmployee(metadata: types.ClockOutEmployeeMetadataParam): Promise<FetchResponse<200, types.ClockOutEmployeeResponse200>>;
    /**
     * Get the projects an employee can track time for.
     *
     * @summary Get Employee Projects
     */
    getEmployeeProjects(metadata: types.GetEmployeeProjectsMetadataParam): Promise<FetchResponse<200, types.GetEmployeeProjectsResponse200>>;
    /**
     * Create a time tracking project with optional tasks.
     *
     * @summary Create a Time Tracking Project
     */
    createTimeTrackingProject(body: types.CreateTimeTrackingProjectBodyParam, metadata: types.CreateTimeTrackingProjectMetadataParam): Promise<FetchResponse<201, types.CreateTimeTrackingProjectResponse201>>;
    /**
     * Provides a list of all goals, type counts, goal comment counts, and employees shared
     * with goals for the given employee. This version of the endpoint will not return any
     * goals with milestones. Milestone functionality for this endpoint begins in version 1.2.
     *
     * @summary Get All Aggregate Goal Info
     */
    getGoalsAggregateV1(metadata: types.GetGoalsAggregateV1MetadataParam): Promise<FetchResponse<200, types.GetGoalsAggregateV1Response200>>;
    /**
     * Provides a list of all goals, type counts, filter actions, goal comment counts, and
     * employees shared with goals for the given employee. Difference from Version 1: Returns
     * goals in the closed filter and provides filter actions for each filter. This version of
     * the endpoint will not return any goals with milestones. Milestone functionality for this
     * endpoint begins in version 1.2.
     *
     * @summary Get All Aggregate Goal Info, Version 1.1
     */
    getGoalsAggregateV11(metadata: types.GetGoalsAggregateV11MetadataParam): Promise<FetchResponse<200, types.GetGoalsAggregateV11Response200>>;
    /**
     * Provides a list of all goals, type counts, filter actions, goal comment counts, and
     * employees shared with goals for the given employee. Difference from Version 1.1: Returns
     * all goals, including goals that contain milestones.
     *
     * @summary Get All Aggregate Goal Info, Version 1.2
     */
    getGoalsAggregateV12(metadata: types.GetGoalsAggregateV12MetadataParam): Promise<FetchResponse<200, types.GetGoalsAggregateV12Response200>>;
    /**
     * Provides goal information, goal comments, and employees shared with goals or who have
     * commented on the given goal.
     *
     * @summary Get Aggregate Goal Info
     */
    getGoalAggregate(metadata: types.GetGoalAggregateMetadataParam): Promise<FetchResponse<200, types.GetGoalAggregateResponse200>>;
    /**
     * Updates which employees this goal is shared with.
     *
     * @summary Update Goal Sharing
     */
    putGoalSharedWith(body: types.PutGoalSharedWithBodyParam, metadata: types.PutGoalSharedWithMetadataParam): Promise<FetchResponse<200, types.PutGoalSharedWithResponse200>>;
    /**
     * Update Goal Progress
     *
     */
    putGoalProgress(body: types.PutGoalProgressBodyParam, metadata: types.PutGoalProgressMetadataParam): Promise<FetchResponse<200, types.PutGoalProgressResponse200>>;
    /**
     * Get the number of goals per status for an employee.
     *
     * @summary Get Goal Status Counts
     */
    getGoalsFiltersV1(metadata: types.GetGoalsFiltersV1MetadataParam): Promise<FetchResponse<200, types.GetGoalsFiltersV1Response200>>;
    /**
     * Get the number of goals per status for an employee. Difference from Version 1: Returns
     * goals in the closed filter and provides filter actions for each filter.
     *
     * @summary Get Goal Status Counts, Version 1.1
     */
    getGoalsFiltersV11(metadata: types.GetGoalsFiltersV11MetadataParam): Promise<FetchResponse<200, types.GetGoalsFiltersV11Response200>>;
    /**
     * Determine if the API user has permission to create a goal for this employee.
     *
     * @summary Can Create a Goal
     */
    getCanCreateGoal(metadata: types.GetCanCreateGoalMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get goals for an employee.
     *
     * @summary Get Goals
     */
    getGoals(metadata: types.GetGoalsMetadataParam): Promise<FetchResponse<200, types.GetGoalsResponse200>>;
    /**
     * Create a new goal for an employee.
     *
     * @summary Create Goal
     */
    postGoal(body: types.PostGoalBodyParam, metadata: types.PostGoalMetadataParam): Promise<FetchResponse<201, types.PostGoalResponse201>>;
    /**
     * Update a goal. This version will not update a goal to contain milestones, that
     * functionality is added in version 1.1
     *
     * @summary Update Goal
     */
    putGoalV1(body: types.PutGoalV1BodyParam, metadata: types.PutGoalV1MetadataParam): Promise<FetchResponse<200, types.PutGoalV1Response200>>;
    /**
     * Delete a goal.
     *
     * @summary Delete Goal
     */
    deleteGoal(metadata: types.DeleteGoalMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update a goal. Version 1.1 allows the updating of the milestones contained within the
     * goal, unlike Version 1.
     *
     * @summary Update Goal, V1.1
     */
    putGoalV11(body: types.PutGoalV11BodyParam, metadata: types.PutGoalV11MetadataParam): Promise<FetchResponse<200, types.PutGoalV11Response200>>;
    /**
     * Close a goal.
     *
     * @summary Close Goal
     */
    postCloseGoal(body: types.PostCloseGoalBodyParam, metadata: types.PostCloseGoalMetadataParam): Promise<FetchResponse<201, types.PostCloseGoalResponse201>>;
    postCloseGoal(metadata: types.PostCloseGoalMetadataParam): Promise<FetchResponse<201, types.PostCloseGoalResponse201>>;
    /**
     * Reopen a goal.
     *
     * @summary Reopen a Goal
     */
    postReopenGoal(metadata: types.PostReopenGoalMetadataParam): Promise<FetchResponse<201, types.PostReopenGoalResponse201>>;
    /**
     * Provides a list of employees with whom the specified employee's goals may be shared.
     *
     * @summary Available Goal Sharing Options
     */
    getGoalsShareOptions(metadata: types.GetGoalsShareOptionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get alignable goal options for an employee.
     *
     * @summary Alignable Goal Options
     */
    getGoalsAlignmentOptions(body: types.GetGoalsAlignmentOptionsBodyParam, metadata: types.GetGoalsAlignmentOptionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    getGoalsAlignmentOptions(metadata: types.GetGoalsAlignmentOptionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get comments for a goal.
     *
     * @summary Get Goal Comments
     */
    getGoalComments(metadata: types.GetGoalCommentsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create a new goal comment.
     *
     * @summary Create Goal Comment
     */
    postGoalComment(body: types.PostGoalCommentBodyParam, metadata: types.PostGoalCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update a goal comment.
     *
     * @summary Update Goal Comment
     */
    putGoalComment(body: types.PutGoalCommentBodyParam, metadata: types.PutGoalCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a goal comment.
     *
     * @summary Delete Goal Comment
     */
    deleteGoalComment(metadata: types.DeleteGoalCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of job summaries. The owner of the API key used must have access to ATS
     * settings. Combine as many different optional parameter filters as you like.
     *
     * @summary Get Job Summaries
     */
    getJobSummaries(metadata: types.GetJobSummariesMetadataParam): Promise<FetchResponse<200, types.GetJobSummariesResponse200>>;
    /**
     * Get a list of applications. The owner of the API key used must have access to ATS
     * settings. Combine as many different optional parameter filters as you like.
     *
     * @summary Get Applications
     */
    getApplications(metadata: types.GetApplicationsMetadataParam): Promise<FetchResponse<200, types.GetApplicationsResponse200>>;
    /**
     * Get the details of an application. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Get Application Details
     */
    getApplicationDetails(metadata: types.GetApplicationDetailsMetadataParam): Promise<FetchResponse<200, types.GetApplicationDetailsResponse200>>;
    /**
     * Add a comment to an application. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Add Application Comment
     */
    postApplicationComment(body: types.PostApplicationCommentBodyParam, metadata: types.PostApplicationCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of statuses for a company. The owner of the API key used must have access to
     * ATS settings.
     *
     * @summary Get Statuses
     */
    getStatuses(metadata: types.GetStatusesMetadataParam): Promise<FetchResponse<200, types.GetStatusesResponse200>>;
    /**
     * Change applicant's status. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Change Applicant's Status
     */
    postApplicantStatus(body: types.PostApplicantStatusBodyParam, metadata: types.PostApplicantStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get company locations for use in creating a new job opening. The owner of the API key
     * used must have access to ATS settings.
     *
     * @summary Get Company Locations
     */
    getCompanyLocations(metadata: types.GetCompanyLocationsMetadataParam): Promise<FetchResponse<200, types.GetCompanyLocationsResponse200>>;
    /**
     * Get potential hiring leads for use in creating a new job opening. The owner of the API
     * key used must have access to ATS settings.
     *
     * @summary Get Hiring Leads
     */
    getHiringLeads(metadata: types.GetHiringLeadsMetadataParam): Promise<FetchResponse<200, types.GetHiringLeadsResponse200>>;
    /**
     * Add a new candidate application to a job opening. The owner of the API key used must
     * have access to ATS settings.
     *
     * @summary Add New Candidate
     */
    addNewCandidate(body: types.AddNewCandidateBodyParam, metadata: types.AddNewCandidateMetadataParam): Promise<FetchResponse<200, types.AddNewCandidateResponse200>>;
    /**
     * Add a new job opening. The owner of the API key used must have access to ATS settings.
     *
     * @summary Add New Job Opening
     */
    addNewJobOpening(body: types.AddNewJobOpeningBodyParam, metadata: types.AddNewJobOpeningMetadataParam): Promise<FetchResponse<200, types.AddNewJobOpeningResponse200>>;
    /**
     * Get a list of training types. The owner of the API key used must have access to training
     * settings.
     *
     * @summary List Training Types
     */
    listTrainingTypes(metadata: types.ListTrainingTypesMetadataParam): Promise<FetchResponse<200, types.ListTrainingTypesResponse200>>;
    /**
     * Add a training type. The owner of the API key used must have access to training
     * settings.
     *
     * @summary Add Training Type
     */
    addTrainingType(body: types.AddTrainingTypeBodyParam, metadata: types.AddTrainingTypeMetadataParam): Promise<FetchResponse<201, types.AddTrainingTypeResponse201>>;
    /**
     * Update an existing training type. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Update Training Type
     */
    updateTrainingType(body: types.UpdateTrainingTypeBodyParam, metadata: types.UpdateTrainingTypeMetadataParam): Promise<FetchResponse<200, types.UpdateTrainingTypeResponse200>>;
    /**
     * Delete an existing training type. The owner of the API key used must have access to
     * training settings. Deleting a training type will only be successful if all employee
     * trainings for this type have been removed prior to this request.
     *
     * @summary Delete Training Type
     */
    deleteTrainingType(metadata: types.DeleteTrainingTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of training categories. The owner of the API key used must have access to
     * training settings.
     *
     * @summary List Training Categories
     */
    listTrainingCategories(metadata: types.ListTrainingCategoriesMetadataParam): Promise<FetchResponse<200, types.ListTrainingCategoriesResponse200>>;
    /**
     * Add a training category. The owner of the API key used must have access to training
     * settings.
     *
     * @summary Add Training Category
     */
    addTrainingCategory(body: types.AddTrainingCategoryBodyParam, metadata: types.AddTrainingCategoryMetadataParam): Promise<FetchResponse<201, types.AddTrainingCategoryResponse201>>;
    /**
     * Update an existing training category. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Update Training Category
     */
    updateTrainingCategory(body: types.UpdateTrainingCategoryBodyParam, metadata: types.UpdateTrainingCategoryMetadataParam): Promise<FetchResponse<200, types.UpdateTrainingCategoryResponse200>>;
    /**
     * Delete an existing training category. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Delete Training Category
     */
    deleteTrainingCategory(metadata: types.DeleteTrainingCategoryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all employee training records. The owner of the API key used must have access to
     * view the employee. The API will only return trainings for the employee that the owner of
     * the API key has permission to see. Included with each employee training is the training
     * information that has been selected for tracking in settings.
     *
     * @summary List Employee Trainings
     */
    listEmployeeTrainings(metadata: types.ListEmployeeTrainingsMetadataParam): Promise<FetchResponse<200, types.ListEmployeeTrainingsResponse200>>;
    /**
     * Add a new employee training record. The owner of the API key used must have permission
     * to add trainings for the selected employee.
     *
     * @summary Add New Employee Training Record
     */
    addNewEmployeeTrainingRecord(body: types.AddNewEmployeeTrainingRecordBodyParam, metadata: types.AddNewEmployeeTrainingRecordMetadataParam): Promise<FetchResponse<201, types.AddNewEmployeeTrainingRecordResponse201>>;
    /**
     * Update an existing exmployee training record. The owner of the API key used must have
     * permission to add trainings for the selected employee
     *
     * @summary Update Employee Training Record
     */
    updateEmployeeTrainingRecord(body: types.UpdateEmployeeTrainingRecordBodyParam, metadata: types.UpdateEmployeeTrainingRecordMetadataParam): Promise<FetchResponse<200, types.UpdateEmployeeTrainingRecordResponse200>>;
    /**
     * Delete an existing employee training record. The owner of the API key used must have
     * permission to view and edit the employee and training type.
     *
     * @summary Delete Employee Training Record
     */
    deleteEmployeeTrainingRecord(metadata: types.DeleteEmployeeTrainingRecordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a new Webhook. For more details or instructions you can refer to the [webhooks API
     * tutorial](https://documentation.bamboohr.com/docs/webhooks-api-permission-based).
     *
     * @summary Add Webhook
     * @throws FetchError<400, types.PostWebhookResponse400> Provided JSON is bad, missing required fields, or mulitple access levels.
     * @throws FetchError<403, types.PostWebhookResponse403> Permission violations in the fields selected.
     * @throws FetchError<500, types.PostWebhookResponse500> Internal error
     */
    postWebhook(body: types.PostWebhookBodyParam, metadata: types.PostWebhookMetadataParam): Promise<FetchResponse<201, types.PostWebhookResponse201>>;
    /**
     * Gets as list of webhooks for the user API key.
     *
     * @summary Gets as list of webhooks for the user API key.
     * @throws FetchError<500, types.GetWebhookListResponse500> Internal error
     */
    getWebhookList(metadata: types.GetWebhookListMetadataParam): Promise<FetchResponse<200, types.GetWebhookListResponse200>>;
    /**
     * Get webhook data that is tied to a specific user API Key.
     *
     * @summary Get Webhook
     * @throws FetchError<403, types.GetWebhookResponse403> The API user key does not have permission to see the requested webhook.
     * @throws FetchError<404, types.GetWebhookResponse404> The webhook does not exist.
     * @throws FetchError<500, types.GetWebhookResponse500> Internal error
     */
    getWebhook(metadata: types.GetWebhookMetadataParam): Promise<FetchResponse<200, types.GetWebhookResponse200>>;
    /**
     * Update a webhook, based on webhook ID.
     *
     * @summary Update Webhook
     * @throws FetchError<400, types.PutWebhookResponse400> Provided JSON is bad, missing required fields, or mulitple access levels.
     * @throws FetchError<403, types.PutWebhookResponse403> Permission violations in the fields selected, or the user does not have access to the
     * webhook.
     * @throws FetchError<404, types.PutWebhookResponse404> The webhook to be updated doesn't exist.
     * @throws FetchError<500, types.PutWebhookResponse500> Internal error
     */
    putWebhook(body: types.PutWebhookBodyParam, metadata: types.PutWebhookMetadataParam): Promise<FetchResponse<200, types.PutWebhookResponse200>>;
    /**
     * Delete a webhook that is tied to a specific user API Key.
     *
     * @summary Delete Webhook
     * @throws FetchError<403, types.DeleteWebhookResponse403> The API user key does not have permission to delete the requested webhook.
     * @throws FetchError<404, types.DeleteWebhookResponse404> The webhook to be deleted doesn't exist.
     * @throws FetchError<500, types.DeleteWebhookResponse500> Internal error
     */
    deleteWebhook(metadata: types.DeleteWebhookMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list fields webhooks can monitor monitor
     *
     * @summary Get monitor fields
     * @throws FetchError<500, types.GetMonitorFieldsResponse500> Internal error
     */
    getMonitorFields(metadata: types.GetMonitorFieldsMetadataParam): Promise<FetchResponse<200, types.GetMonitorFieldsResponse200>>;
    /**
     * Get webhook logs for specific webhook id that is associated with the user API Key.
     *
     * @summary Get Webhook Logs
     * @throws FetchError<403, types.GetWebhookLogsResponse403> The API user key is invalid, or does not have permission to see the requested webhook.
     * @throws FetchError<404, types.GetWebhookLogsResponse404> The webhook does not exist.
     * @throws FetchError<500, types.GetWebhookLogsResponse500> Internal error
     */
    getWebhookLogs(metadata: types.GetWebhookLogsMetadataParam): Promise<FetchResponse<200, types.GetWebhookLogsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
