"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'bamboohr/v1 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get employee data by specifying a set of fields. This is suitable for getting basic
     * employee information, including current values for fields that are part of a historical
     * table, like job title, or compensation information. See the
     * [fields](ref:metadata-get-a-list-of-fields) endpoint for a list of possible fields.
     *
     * @summary Get Employee
     */
    SDK.prototype.getEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/', 'get', metadata);
    };
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
    SDK.prototype.updateEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/', 'post', body, metadata);
    };
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
    SDK.prototype.addEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/', 'post', body, metadata);
    };
    /**
     * Gets employee directory.
     *
     * @summary Get Employee Directory
     */
    SDK.prototype.getEmployeesDirectory = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/directory', 'get', metadata);
    };
    /**
     * Lists employee files and categories
     *
     * @summary List employee files and categories
     */
    SDK.prototype.listEmployeeFiles = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/view/', 'get', metadata);
    };
    /**
     * Add an employee file category.
     *
     * @summary Add Employee File Category
     */
    SDK.prototype.addEmployeeFileCategory = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/files/categories', 'post', body, metadata);
    };
    /**
     * Update an employee file
     *
     * @summary Update Employee File
     */
    SDK.prototype.updateEmployeeFile = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/{fileId}', 'post', body, metadata);
    };
    /**
     * Delete an employee file
     *
     * @summary Delete Employee File
     */
    SDK.prototype.deleteEmployeeFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/{fileId}', 'delete', metadata);
    };
    /**
     * Gets an employee file
     *
     * @summary Get an Employee File
     */
    SDK.prototype.getEmployeeFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/files/{fileId}', 'get', metadata);
    };
    /**
     * Upload an employee file
     *
     * @summary Upload Employee File
     */
    SDK.prototype.uploadEmployeeFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/files', 'post', metadata);
    };
    /**
     * Lists company files and categories
     *
     * @summary List company files and categories
     */
    SDK.prototype.listCompanyFiles = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/files/view/', 'get', metadata);
    };
    /**
     * Add a company file category.
     *
     * @summary Add Company File Category
     */
    SDK.prototype.addCompanyFileCategory = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/files/categories', 'post', body, metadata);
    };
    /**
     * Update a company file
     *
     * @summary Update Company File
     */
    SDK.prototype.updateCompanyFile = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'post', body, metadata);
    };
    /**
     * Delete a company file
     *
     * @summary Delete Company File
     */
    SDK.prototype.deleteCompanyFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'delete', metadata);
    };
    /**
     * Gets an company file
     *
     * @summary Get an Company File
     */
    SDK.prototype.getCompanyFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/files/{fileId}', 'get', metadata);
    };
    /**
     * Upload a company file
     *
     * @summary Upload Company File
     */
    SDK.prototype.uploadCompanyFile = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/files', 'post', metadata);
    };
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
    SDK.prototype.getCompanyReport = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/reports/{id}', 'get', metadata);
    };
    /**
     * Use this resource to request BambooHR generate a report. You must specify a type of
     * either "PDF", "XLS", "CSV", "JSON", or "XML". You must specify a list of fields to show
     * on the report. The list of fields is available here. The custom report will return
     * employees regardless of their status, "Active" or "Inactive". This differs from the UI,
     * which by default applies a quick filter to display only "Active" employees.
     *
     * @summary Request a custom report
     */
    SDK.prototype.requestCustomReport = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/reports/custom', 'post', body, metadata);
    };
    /**
     * Returns a data structure representing all the table rows for a given employee and table
     * combination. The result is not sorted in any particular order.
     *
     * @summary Gets table rows for a given employee and table combination
     */
    SDK.prototype.getEmployeeTableRow = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/tables/{table}', 'get', metadata);
    };
    /**
     * Adds a table row. If employee is currently on a pay schedule syncing with Trax Payroll,
     * or being added to one, the row cannot be added if they are missing any required fields
     * for that table. If the API user is adding a row on the compensation table, the row
     * cannot be added if they are missing any of the required employee fields (including
     * fields not on that table).
     *
     * @summary Adds a table row
     */
    SDK.prototype.addEmployeeTableRow = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/tables/{table}', 'post', body, metadata);
    };
    /**
     * Updates a table row. If employee is currently on a pay schedule syncing with Trax
     * Payroll, or being added to one, the row cannot be added if they are missing any required
     * fields for that table. If the API user is updating a row on the compensation table, the
     * row cannot be updated if they are missing any of the required employee fields (including
     * fields not on that table).
     *
     * @summary Updates a table row.
     */
    SDK.prototype.updateEmployeeTableRow = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}', 'post', body, metadata);
    };
    /**
     * Deletes a table row
     *
     * @summary Deletes a table row
     */
    SDK.prototype.deleteEmployeeTableRowV1 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{id}/tables/{table}/{rowId}', 'delete', metadata);
    };
    /**
     * Updates a table row. Fundamentally the same as version 1 so choose a version and stay
     * with it unless other changes occur. Changes from version 1 are now minor with a few
     * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
     * date.
     *
     * @summary Updates a table row.
     */
    SDK.prototype.updateEmployeeTableRowV = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/employees/{id}/tables/{table}/{rowId}', 'post', body, metadata);
    };
    /**
     * Adds a table row. Fundamentally the same as version 1 so choose a version and stay with
     * it unless other changes occur. Changes from version 1 are now minor with a few
     * variations limited to ACA, payroll, terminated rehire, gusto, benetrac, and final pay
     * date.
     *
     * @summary Adds a table row
     */
    SDK.prototype.addEmployeeTableRowV1 = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/employees/{id}/tables/{table}', 'post', body, metadata);
    };
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
    SDK.prototype.getChangedEmployeeTableData = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/changed/tables/{table}', 'get', metadata);
    };
    /**
     * This endpoint can help with discovery of fields that are available in an account.
     *
     * @summary Get a list of fields
     */
    SDK.prototype.metadataGetAListOfFields = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/fields/', 'get', metadata);
    };
    /**
     * This endpoint can help discover table fields available in your BambooHR account.
     *
     * @summary Get a list of tabular fields
     */
    SDK.prototype.metadataGetAListOfTabularFields = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/tables/', 'get', metadata);
    };
    /**
     * This endpoint will return details for all list fields. Lists that can be edited will
     * have the "manageable" attribute set to yes. Lists with the "multiple" attribute set to
     * yes are fields that can have multiple values. Options with the "archived" attribute set
     * to yes should not appear as current options, but are included so that historical data
     * can reference the value.
     *
     * @summary Get details for list fields
     */
    SDK.prototype.metadataGetDetailsForListFields = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/lists/', 'get', metadata);
    };
    /**
     * This resource accepts one or more options. To update an option, specify an ID. You may
     * also remove an option from the list of current values by archiving the value. To create
     * a new option, do not specify an "id" attribute.
     *
     * @summary Add or Update Values for List Fields
     */
    SDK.prototype.metadataAddOrUpdateValuesForListFields = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/lists/{listFieldId}', 'put', body, metadata);
    };
    /**
     * Get a List of Users
     *
     */
    SDK.prototype.getAListOfUsers = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/users/', 'get', metadata);
    };
    /**
     * This endpoint gets a list of time off types.
     *
     * @summary Get Time Off Types
     */
    SDK.prototype.getTimeOffTypes = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/time_off/types/', 'get', metadata);
    };
    /**
     * This endpoint gets a list of time off policies.
     *
     * @summary Get Time Off Policies
     */
    SDK.prototype.getTimeOffPolicies = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/meta/time_off/policies/', 'get', metadata);
    };
    /**
     * Get Time Off Requests
     *
     */
    SDK.prototype.timeOffGetTimeOffRequests = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_off/requests/', 'get', metadata);
    };
    /**
     * A time off request is an entity that describes the decision making process for approving
     * time off. Once a request has been created, a history entry can be created documenting
     * the actual use of time off.
     *
     * @summary Add a Time Off Request
     */
    SDK.prototype.timeOffAddATimeOffRequest = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/request', 'put', body, metadata);
    };
    /**
     * This endpoint allows you to change the status of a request in the system. You can use
     * this to approve, deny, or cancel a time off request.
     *
     * @summary Change a Request Status
     */
    SDK.prototype.timeOffChangeARequestStatus = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_off/requests/{requestId}/status', 'put', body, metadata);
    };
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A new time off history item will be inserted into the database. On success, a 201
     * Created code is returned and the "Location" header of the response will contain a URL
     * that identifies the new history item.
     *
     * @summary Add a Time Off History Item For Time Off Request
     */
    SDK.prototype.timeOffAddATimeOffHistoryItemForTimeOffRequest = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/history/', 'put', body, metadata);
    };
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off balance adjustment will be inserted into the database. On success, a
     * 201 Created code is returned and the "Location" header of the response will contain a
     * URL that identifies the new history item.
     *
     * @summary Adjust Time Off Balance
     */
    SDK.prototype.timeOffAdjustTimeOffBalance = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/balance_adjustment/', 'put', body, metadata);
    };
    /**
     * List Time Off Policies for Employee
     *
     */
    SDK.prototype.timeOffListTimeOffPoliciesForEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/policies', 'get', metadata);
    };
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off policy will be assigned to the employee with accruals starting on the
     * date specified. A null start date will remove the assignment. On success, a 200 Success
     * code is returned and the content of the response will be the same as the List Time off
     * Policies API.
     *
     * @summary Assign Time Off Policies for an Employee
     */
    SDK.prototype.timeOffAssignTimeOffPoliciesForAnEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/policies', 'put', body, metadata);
    };
    /**
     * List Time Off Policies for Employee, Version 1.1
     *
     */
    SDK.prototype.timeOffV11ListTimeOffPoliciesForEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies', 'get', metadata);
    };
    /**
     * To use this API make an HTTP PUT where the body of the request is the JSON documented
     * below. A time off policy will be assigned to the employee with accruals starting on the
     * date specified. On success, a 200 Success code is returned and the content of the
     * response will be the same as the List Time off Policies API.
     *
     * @summary Assign Time Off Policies for an Employee, Version 1.1
     */
    SDK.prototype.timeOffV11AssignTimeOffPoliciesForAnEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/employees/{employeeId}/time_off/policies', 'put', body, metadata);
    };
    /**
     * This endpoint will sum future time off accruals, scheduled time off, and carry-over
     * events to produce estimates for the anticipated time off balance on a given date in the
     * future.
     *
     * @summary Estimate Future Time Off Balances
     */
    SDK.prototype.estimateFutureTimeOffBalances = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/time_off/calculator', 'get', metadata);
    };
    /**
     * This endpoint will return a list, sorted by date, of employees who will be out, and
     * company holidays, for a period of time.
     *
     * @summary Get a list of Who's Out
     */
    SDK.prototype.getAListOfWhoSOut = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_off/whos_out/', 'get', metadata);
    };
    /**
     * Get an employee photo
     *
     * @summary Get an employee photo
     */
    SDK.prototype.getEmployeePhoto = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/photo/{size}', 'get', metadata);
    };
    /**
     * Store a new employee photo
     *
     * @summary Store a new employee photo
     */
    SDK.prototype.uploadEmployeePhoto = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/{employeeId}/photo', 'post', metadata);
    };
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
    SDK.prototype.getChangedEmployeeIds = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employees/changed', 'get', metadata);
    };
    /**
     * User Login
     *
     * @summary User Login
     */
    SDK.prototype.login = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/login', 'post', body, metadata);
    };
    /**
     * Get benefit deduction types
     *
     * @summary Get benefit deduction types
     */
    SDK.prototype.getBenefitDeductionTypes = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefits/settings/deduction_types/all', 'get', metadata);
    };
    /**
     * Get a list of company benefits
     *
     * @summary Get a list of company benefits
     */
    SDK.prototype.getCompanyBenefits = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit', 'get', metadata);
    };
    /**
     * Add a new company benefit
     *
     * @summary Add a new company benefit
     */
    SDK.prototype.addNewCompanyBenefit = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit', 'post', body, metadata);
    };
    /**
     * Get a company benefit
     *
     * @summary Get a company benefit
     */
    SDK.prototype.getCompanyBenefit = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/{id}', 'get', metadata);
    };
    /**
     * Update a company benefit
     *
     * @summary Update a company benefit
     */
    SDK.prototype.updateCompanyBenefit = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/{id}', 'put', body, metadata);
    };
    /**
     * Delete a company benefit
     *
     * @summary Delete a company benefit
     */
    SDK.prototype.deleteCompanyBenefit = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/{id}', 'delete', metadata);
    };
    /**
     * Update a company benefit
     *
     * @summary Update a company benefit
     */
    SDK.prototype.updateCompanyBenefitProperties = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1_2/benefit/company_benefit/{id}', 'post', body, metadata);
    };
    /**
     * Get a list of company benefit types
     *
     * @summary Get a list of company benefit types
     */
    SDK.prototype.getCompanyBenefitTypes = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/company_benefit/type', 'get', metadata);
    };
    SDK.prototype.getEmployeeBenefit = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/employee_benefit', 'get', body, metadata);
    };
    /**
     * Add an employee benefit
     *
     * @summary Add an employee benefit
     */
    SDK.prototype.postEmployeeBenefit = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefit/employee_benefit', 'post', body, metadata);
    };
    /**
     * Get benefit coverages
     *
     * @summary Get benefit coverages
     */
    SDK.prototype.getBenefitCoverages = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitcoverages', 'get', metadata);
    };
    /**
     * Get employee dependent
     *
     * @summary Get employee dependent
     */
    SDK.prototype.getEmployeeDependent = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employeedependents/{id}', 'get', metadata);
    };
    /**
     * This API allows you to change the information for a given dependent ID.
     *
     * @summary Update an employee dependent
     */
    SDK.prototype.updateEmployeeDependent = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employeedependents/{id}', 'put', body, metadata);
    };
    /**
     * Get all employee dependents
     *
     * @summary Get all employee dependents
     */
    SDK.prototype.getEmployeeDependents = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employeedependents', 'get', metadata);
    };
    /**
     * Adds an employee dependent
     *
     * @summary Add an employee dependent
     */
    SDK.prototype.addEmployeeDependent = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employeedependents', 'post', body, metadata);
    };
    /**
     * Get benefit plans
     *
     * @summary Get benefit plans
     */
    SDK.prototype.getBenefitPlans = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitplans', 'get', metadata);
    };
    /**
     * Get benefit plan coverages
     *
     * @summary Get benefit plan coverages
     */
    SDK.prototype.getBenefitPlanCoverages = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitplancoverages', 'get', metadata);
    };
    /**
     * Get benefit groups
     *
     * @summary Get benefit groups
     */
    SDK.prototype.getBenefitGroups = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitgroups', 'get', metadata);
    };
    /**
     * Get benefit group employees
     *
     * @summary Get benefit group employees
     */
    SDK.prototype.getBenefitGroupEmployees = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitgroupemployees', 'get', metadata);
    };
    /**
     * Add a benefit group employee
     *
     * @summary Add a benefit group employee
     */
    SDK.prototype.addBenefitGroupEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitgroupemployees', 'post', body, metadata);
    };
    /**
     * Get benefit group plans
     *
     * @summary Get benefit group plans
     */
    SDK.prototype.getBenefitGroupPlans = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitgroupplans', 'get', metadata);
    };
    /**
     * Get benefit group plan costs
     *
     * @summary Get benefit group plan costs
     */
    SDK.prototype.getBenefitGroupPlanCosts = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/benefitgroupplancosts', 'get', metadata);
    };
    /**
     * Get employee deductions by benefit plan
     *
     * @summary Get employee deductions by benefit plan
     */
    SDK.prototype.getEmployeeDeductionsByPlan = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee/deductions/{id}', 'get', metadata);
    };
    /**
     * Get benefit plan deductions by employee
     *
     * @summary Get benefit plan deductions by employee
     */
    SDK.prototype.getPlanDeductionsByEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee/plans/{id}', 'get', metadata);
    };
    /**
     * Get benefit deductions for employee
     *
     * @summary Get benefit deductions for employee
     */
    SDK.prototype.getPayrollDeductionsForEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/payroll/deductions/{id}', 'get', metadata);
    };
    /**
     * Get an employee's default withholdings
     *
     * @summary Get an employee's default withholdings
     */
    SDK.prototype.getEmployeeWithholdings = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'get', metadata);
    };
    /**
     * Add an employee's default withholdings
     *
     * @summary Add an employee's default withholdings
     */
    SDK.prototype.addEmployeeWithholding = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'post', body, metadata);
    };
    /**
     * Clear an employee's default withholdings
     *
     * @summary Clear an employee's default withholdings
     */
    SDK.prototype.clearEmployeeWithholding = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_withholding/{id}', 'delete', metadata);
    };
    /**
     * Get an employee's direct deposit information
     *
     * @summary Get an employee's direct deposit information
     */
    SDK.prototype.getEmployeeDepositAccounts = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_direct_deposit_accounts/{id}', 'get', metadata);
    };
    /**
     * Add an employee's direct deposit information
     *
     * @summary Add an employee's direct deposit information
     */
    SDK.prototype.addEmployeeDeposit = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_direct_deposit_accounts/{id}', 'post', body, metadata);
    };
    /**
     * Clear an employee's direct deposit information
     *
     * @summary Clear an employee's direct deposit information
     */
    SDK.prototype.clearEmployeeDeposit = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_direct_deposit_accounts/{id}', 'delete', metadata);
    };
    /**
     * Get an employee's unpaid paystubs
     *
     * @summary Get an employee's unpaid paystubs
     */
    SDK.prototype.getEmployeeUnpaidPaystubs = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}', 'get', metadata);
    };
    /**
     * Clear an employee's unpaid paystubs
     *
     * @summary Clear an employee's unpaid paystubs
     * @throws FetchError<400, types.ClearEmployeeUnpaidPaystubsResponse400> Unauthorized
     * @throws FetchError<403, types.ClearEmployeeUnpaidPaystubsResponse403> Forbidden
     */
    SDK.prototype.clearEmployeeUnpaidPaystubs = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_unpaid_pay_stubs/{id}', 'delete', metadata);
    };
    /**
     * Add an employee's unpaid paystubs
     *
     * @summary Add an employee's unpaid paystubs
     */
    SDK.prototype.addEmployeeUnpaidPaystubs = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_unpaid_pay_stubs', 'post', body, metadata);
    };
    /**
     * Get an employee's paystub
     *
     * @summary Get an employee's paystub
     */
    SDK.prototype.getEmployeePaystub = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_pay_stub/{id}', 'get', metadata);
    };
    /**
     * Delete an employee's paystub
     *
     * @summary Delete an employee's paystub
     */
    SDK.prototype.clearEmployeePaystub = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_pay_stub/{id}', 'delete', metadata);
    };
    /**
     * Add an employee's paystub
     *
     * @summary Add an employee's paystub
     */
    SDK.prototype.addEmployeePaystub = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/employee_pay_stub', 'post', body, metadata);
    };
    /**
     * Get an hour record
     *
     * @summary Get an hour record
     */
    SDK.prototype.getHourRecord = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/timetracking/record/{id}', 'get', metadata);
    };
    /**
     * Add an hour record
     *
     * @summary Add an hour record
     */
    SDK.prototype.addHourRecord = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/timetracking/add', 'post', body, metadata);
    };
    /**
     * Edit an hour record
     *
     * @summary Edit an hour record
     */
    SDK.prototype.editHourRecord = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/timetracking/adjust', 'put', body, metadata);
    };
    /**
     * Delete an hour record
     *
     * @summary Delete an hour record
     */
    SDK.prototype.deleteHourRecord = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/timetracking/delete/{id}', 'delete', metadata);
    };
    /**
     * Bulk add/edit hour records
     *
     * @summary Bulk add/edit hour records
     */
    SDK.prototype.bulkRecordHours = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/timetracking/record', 'post', body, metadata);
    };
    /**
     * Approve employee timesheets
     *
     * @summary Approve employee timesheets
     */
    SDK.prototype.approveEmployeeTimesheets = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/timesheets/approve', 'post', body, metadata);
    };
    /**
     * Approve timesheets for employees that are currently clocked in
     *
     * @summary Approve timesheets for employees that are currently clocked in
     */
    SDK.prototype.clockOutAndApproveEmployeeTimesheets = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/timesheets/clock_out_and_approve', 'post', body, metadata);
    };
    /**
     * Get timesheets by ids
     *
     * @summary Get timesheets by ids
     */
    SDK.prototype.getTimesheets = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/timesheets', 'get', body, metadata);
    };
    SDK.prototype.clockIn = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_in/{employeeId}', 'post', body, metadata);
    };
    SDK.prototype.clockOut = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_out/{employeeId}', 'post', body, metadata);
    };
    SDK.prototype.storeDailyEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/daily_entries', 'post', body, metadata);
    };
    SDK.prototype.storeClockEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_entries', 'post', body, metadata);
    };
    /**
     * Delete clock entries
     *
     * @summary Delete clock entries
     */
    SDK.prototype.deleteClockEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_entries', 'delete', body, metadata);
    };
    /**
     * Get a timesheet for an employee
     *
     * @summary Get a timesheet for an employee
     */
    SDK.prototype.getEmployeeTimesheet = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/timesheet/{timesheetId}', 'get', metadata);
    };
    /**
     * Get a daily entry
     *
     * @summary Get a daily entry
     */
    SDK.prototype.getDailyEntry = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/daily_entries/{id}', 'get', metadata);
    };
    /**
     * Get a clock entry
     *
     * @summary Get a clock entry
     */
    SDK.prototype.getClockEntry = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_entries/{id}', 'get', metadata);
    };
    /**
     * Is employee clocked in?
     *
     * @summary Is employee clocked in?
     */
    SDK.prototype.isEmployeeClockedIn = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/is_clocked_in', 'get', metadata);
    };
    SDK.prototype.clockOutEmployeeAtSpecificTime = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_out/datetime', 'post', body, metadata);
    };
    SDK.prototype.clockInData = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/clock_in/data', 'post', body, metadata);
    };
    /**
     * Get projects an employee can log time to
     *
     * @summary Get projects an employee can log time to
     */
    SDK.prototype.timeTrackingEmployeeProjects = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects', 'get', metadata);
    };
    /**
     * Get tasks for a project
     *
     * @summary Get tasks for a project
     */
    SDK.prototype.timeTrackingProjectTasks = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employee/{employeeId}/projects/{projectId}/tasks', 'get', metadata);
    };
    /**
     * Get all timesheet entries for a given period of time.
     *
     * @summary Get Timesheet Entries
     */
    SDK.prototype.getTimesheetEntries = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/timesheet_entries', 'get', metadata);
    };
    /**
     * Add or edit timesheet clock entries.
     *
     * @summary Add/Edit Timesheet Clock Entries
     */
    SDK.prototype.storeTimesheetClockEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_entries/store', 'post', body, metadata);
    };
    /**
     * Delete timesheet clock entries.
     *
     * @summary Delete Timesheet Clock Entries
     */
    SDK.prototype.deleteTimesheetClockEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/clock_entries/delete', 'post', body, metadata);
    };
    /**
     * Add or edit timesheet hour entries.
     *
     * @summary Add/Edit Timesheet Hour Entries
     */
    SDK.prototype.storeTimesheetHourEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/hour_entries/store', 'post', body, metadata);
    };
    /**
     * Delete timesheet hour entries.
     *
     * @summary Delete Timesheet Hour Entries
     */
    SDK.prototype.deleteTimesheetHourEntries = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/hour_entries/delete', 'post', body, metadata);
    };
    SDK.prototype.clockInEmployee = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_in', 'post', body, metadata);
    };
    /**
     * Clock out an employee.
     *
     * @summary Add Timesheet Clock-Out Entry
     */
    SDK.prototype.clockOutEmployee = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employees/{employeeId}/clock_out', 'post', metadata);
    };
    /**
     * Get the projects an employee can track time for.
     *
     * @summary Get Employee Projects
     */
    SDK.prototype.getEmployeeProjects = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/employees/{employeeId}/projects', 'get', metadata);
    };
    /**
     * Create a time tracking project with optional tasks.
     *
     * @summary Create a Time Tracking Project
     */
    SDK.prototype.createTimeTrackingProject = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/time_tracking/projects', 'post', body, metadata);
    };
    /**
     * Provides a list of all goals, type counts, goal comment counts, and employees shared
     * with goals for the given employee. This version of the endpoint will not return any
     * goals with milestones. Milestone functionality for this endpoint begins in version 1.2.
     *
     * @summary Get All Aggregate Goal Info
     */
    SDK.prototype.getGoalsAggregateV1 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/aggregate', 'get', metadata);
    };
    /**
     * Provides a list of all goals, type counts, filter actions, goal comment counts, and
     * employees shared with goals for the given employee. Difference from Version 1: Returns
     * goals in the closed filter and provides filter actions for each filter. This version of
     * the endpoint will not return any goals with milestones. Milestone functionality for this
     * endpoint begins in version 1.2.
     *
     * @summary Get All Aggregate Goal Info, Version 1.1
     */
    SDK.prototype.getGoalsAggregateV11 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/aggregate', 'get', metadata);
    };
    /**
     * Provides a list of all goals, type counts, filter actions, goal comment counts, and
     * employees shared with goals for the given employee. Difference from Version 1.1: Returns
     * all goals, including goals that contain milestones.
     *
     * @summary Get All Aggregate Goal Info, Version 1.2
     */
    SDK.prototype.getGoalsAggregateV12 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1_2/performance/employees/{employeeId}/goals/aggregate', 'get', metadata);
    };
    /**
     * Provides goal information, goal comments, and employees shared with goals or who have
     * commented on the given goal.
     *
     * @summary Get Aggregate Goal Info
     */
    SDK.prototype.getGoalAggregate = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/aggregate', 'get', metadata);
    };
    /**
     * Updates which employees this goal is shared with.
     *
     * @summary Update Goal Sharing
     */
    SDK.prototype.putGoalSharedWith = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/sharedWith', 'put', body, metadata);
    };
    /**
     * Update Goal Progress
     *
     */
    SDK.prototype.putGoalProgress = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/progress', 'put', body, metadata);
    };
    /**
     * Get the number of goals per status for an employee.
     *
     * @summary Get Goal Status Counts
     */
    SDK.prototype.getGoalsFiltersV1 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/filters', 'get', metadata);
    };
    /**
     * Get the number of goals per status for an employee. Difference from Version 1: Returns
     * goals in the closed filter and provides filter actions for each filter.
     *
     * @summary Get Goal Status Counts, Version 1.1
     */
    SDK.prototype.getGoalsFiltersV11 = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/filters', 'get', metadata);
    };
    /**
     * Determine if the API user has permission to create a goal for this employee.
     *
     * @summary Can Create a Goal
     */
    SDK.prototype.getCanCreateGoal = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/canCreateGoals', 'get', metadata);
    };
    /**
     * Get goals for an employee.
     *
     * @summary Get Goals
     */
    SDK.prototype.getGoals = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals', 'get', metadata);
    };
    /**
     * Create a new goal for an employee.
     *
     * @summary Create Goal
     */
    SDK.prototype.postGoal = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals', 'post', body, metadata);
    };
    /**
     * Update a goal. This version will not update a goal to contain milestones, that
     * functionality is added in version 1.1
     *
     * @summary Update Goal
     */
    SDK.prototype.putGoalV1 = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}', 'put', body, metadata);
    };
    /**
     * Delete a goal.
     *
     * @summary Delete Goal
     */
    SDK.prototype.deleteGoal = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}', 'delete', metadata);
    };
    /**
     * Update a goal. Version 1.1 allows the updating of the milestones contained within the
     * goal, unlike Version 1.
     *
     * @summary Update Goal, V1.1
     */
    SDK.prototype.putGoalV11 = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1_1/performance/employees/{employeeId}/goals/{goalId}', 'put', body, metadata);
    };
    SDK.prototype.postCloseGoal = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/close', 'post', body, metadata);
    };
    /**
     * Reopen a goal.
     *
     * @summary Reopen a Goal
     */
    SDK.prototype.postReopenGoal = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/reopen', 'post', metadata);
    };
    /**
     * Provides a list of employees with whom the specified employee's goals may be shared.
     *
     * @summary Available Goal Sharing Options
     */
    SDK.prototype.getGoalsShareOptions = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/shareOptions', 'get', metadata);
    };
    SDK.prototype.getGoalsAlignmentOptions = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/alignmentOptions', 'get', body, metadata);
    };
    /**
     * Get comments for a goal.
     *
     * @summary Get Goal Comments
     */
    SDK.prototype.getGoalComments = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments', 'get', metadata);
    };
    /**
     * Create a new goal comment.
     *
     * @summary Create Goal Comment
     */
    SDK.prototype.postGoalComment = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments', 'post', body, metadata);
    };
    /**
     * Update a goal comment.
     *
     * @summary Update Goal Comment
     */
    SDK.prototype.putGoalComment = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}', 'put', body, metadata);
    };
    /**
     * Delete a goal comment.
     *
     * @summary Delete Goal Comment
     */
    SDK.prototype.deleteGoalComment = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/performance/employees/{employeeId}/goals/{goalId}/comments/{commentId}', 'delete', metadata);
    };
    /**
     * Get a list of job summaries. The owner of the API key used must have access to ATS
     * settings. Combine as many different optional parameter filters as you like.
     *
     * @summary Get Job Summaries
     */
    SDK.prototype.getJobSummaries = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/jobs', 'get', metadata);
    };
    /**
     * Get a list of applications. The owner of the API key used must have access to ATS
     * settings. Combine as many different optional parameter filters as you like.
     *
     * @summary Get Applications
     */
    SDK.prototype.getApplications = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/applications', 'get', metadata);
    };
    /**
     * Get the details of an application. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Get Application Details
     */
    SDK.prototype.getApplicationDetails = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/applications/{applicationId}', 'get', metadata);
    };
    /**
     * Add a comment to an application. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Add Application Comment
     */
    SDK.prototype.postApplicationComment = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/comments', 'post', body, metadata);
    };
    /**
     * Get a list of statuses for a company. The owner of the API key used must have access to
     * ATS settings.
     *
     * @summary Get Statuses
     */
    SDK.prototype.getStatuses = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/statuses', 'get', metadata);
    };
    /**
     * Change applicant's status. The owner of the API key used must have access to ATS
     * settings.
     *
     * @summary Change Applicant's Status
     */
    SDK.prototype.postApplicantStatus = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/applications/{applicationId}/status', 'post', body, metadata);
    };
    /**
     * Get company locations for use in creating a new job opening. The owner of the API key
     * used must have access to ATS settings.
     *
     * @summary Get Company Locations
     */
    SDK.prototype.getCompanyLocations = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/locations', 'get', metadata);
    };
    /**
     * Get potential hiring leads for use in creating a new job opening. The owner of the API
     * key used must have access to ATS settings.
     *
     * @summary Get Hiring Leads
     */
    SDK.prototype.getHiringLeads = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/hiring_leads', 'get', metadata);
    };
    /**
     * Add a new candidate application to a job opening. The owner of the API key used must
     * have access to ATS settings.
     *
     * @summary Add New Candidate
     */
    SDK.prototype.addNewCandidate = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/application', 'post', body, metadata);
    };
    /**
     * Add a new job opening. The owner of the API key used must have access to ATS settings.
     *
     * @summary Add New Job Opening
     */
    SDK.prototype.addNewJobOpening = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/applicant_tracking/job_opening', 'post', body, metadata);
    };
    /**
     * Get a list of training types. The owner of the API key used must have access to training
     * settings.
     *
     * @summary List Training Types
     */
    SDK.prototype.listTrainingTypes = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/type', 'get', metadata);
    };
    /**
     * Add a training type. The owner of the API key used must have access to training
     * settings.
     *
     * @summary Add Training Type
     */
    SDK.prototype.addTrainingType = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/type', 'post', body, metadata);
    };
    /**
     * Update an existing training type. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Update Training Type
     */
    SDK.prototype.updateTrainingType = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/type/{trainingTypeId}', 'put', body, metadata);
    };
    /**
     * Delete an existing training type. The owner of the API key used must have access to
     * training settings. Deleting a training type will only be successful if all employee
     * trainings for this type have been removed prior to this request.
     *
     * @summary Delete Training Type
     */
    SDK.prototype.deleteTrainingType = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/type/{trainingTypeId}', 'delete', metadata);
    };
    /**
     * Get a list of training categories. The owner of the API key used must have access to
     * training settings.
     *
     * @summary List Training Categories
     */
    SDK.prototype.listTrainingCategories = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/category', 'get', metadata);
    };
    /**
     * Add a training category. The owner of the API key used must have access to training
     * settings.
     *
     * @summary Add Training Category
     */
    SDK.prototype.addTrainingCategory = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/category', 'post', body, metadata);
    };
    /**
     * Update an existing training category. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Update Training Category
     */
    SDK.prototype.updateTrainingCategory = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/category/{trainingCategoryId}', 'put', body, metadata);
    };
    /**
     * Delete an existing training category. The owner of the API key used must have access to
     * training settings.
     *
     * @summary Delete Training Category
     */
    SDK.prototype.deleteTrainingCategory = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/category/{trainingCategoryId}', 'delete', metadata);
    };
    /**
     * Get all employee training records. The owner of the API key used must have access to
     * view the employee. The API will only return trainings for the employee that the owner of
     * the API key has permission to see. Included with each employee training is the training
     * information that has been selected for tracking in settings.
     *
     * @summary List Employee Trainings
     */
    SDK.prototype.listEmployeeTrainings = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/record/employee/{employeeId}', 'get', metadata);
    };
    /**
     * Add a new employee training record. The owner of the API key used must have permission
     * to add trainings for the selected employee.
     *
     * @summary Add New Employee Training Record
     */
    SDK.prototype.addNewEmployeeTrainingRecord = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/record/employee/{employeeId}', 'post', body, metadata);
    };
    /**
     * Update an existing exmployee training record. The owner of the API key used must have
     * permission to add trainings for the selected employee
     *
     * @summary Update Employee Training Record
     */
    SDK.prototype.updateEmployeeTrainingRecord = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/record/{employeeTrainingRecordId}', 'put', body, metadata);
    };
    /**
     * Delete an existing employee training record. The owner of the API key used must have
     * permission to view and edit the employee and training type.
     *
     * @summary Delete Employee Training Record
     */
    SDK.prototype.deleteEmployeeTrainingRecord = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/training/record/{employeeTrainingRecordId}', 'delete', metadata);
    };
    /**
     * Add a new Webhook. For more details or instructions you can refer to the [webhooks API
     * tutorial](https://documentation.bamboohr.com/docs/webhooks-api-permission-based).
     *
     * @summary Add Webhook
     * @throws FetchError<400, types.PostWebhookResponse400> Provided JSON is bad, missing required fields, or mulitple access levels.
     * @throws FetchError<403, types.PostWebhookResponse403> Permission violations in the fields selected.
     * @throws FetchError<500, types.PostWebhookResponse500> Internal error
     */
    SDK.prototype.postWebhook = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/', 'post', body, metadata);
    };
    /**
     * Gets as list of webhooks for the user API key.
     *
     * @summary Gets as list of webhooks for the user API key.
     * @throws FetchError<500, types.GetWebhookListResponse500> Internal error
     */
    SDK.prototype.getWebhookList = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/', 'get', metadata);
    };
    /**
     * Get webhook data that is tied to a specific user API Key.
     *
     * @summary Get Webhook
     * @throws FetchError<403, types.GetWebhookResponse403> The API user key does not have permission to see the requested webhook.
     * @throws FetchError<404, types.GetWebhookResponse404> The webhook does not exist.
     * @throws FetchError<500, types.GetWebhookResponse500> Internal error
     */
    SDK.prototype.getWebhook = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'get', metadata);
    };
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
    SDK.prototype.putWebhook = function (body, metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'put', body, metadata);
    };
    /**
     * Delete a webhook that is tied to a specific user API Key.
     *
     * @summary Delete Webhook
     * @throws FetchError<403, types.DeleteWebhookResponse403> The API user key does not have permission to delete the requested webhook.
     * @throws FetchError<404, types.DeleteWebhookResponse404> The webhook to be deleted doesn't exist.
     * @throws FetchError<500, types.DeleteWebhookResponse500> Internal error
     */
    SDK.prototype.deleteWebhook = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/', 'delete', metadata);
    };
    /**
     * Get a list fields webhooks can monitor monitor
     *
     * @summary Get monitor fields
     * @throws FetchError<500, types.GetMonitorFieldsResponse500> Internal error
     */
    SDK.prototype.getMonitorFields = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/monitor_fields', 'get', metadata);
    };
    /**
     * Get webhook logs for specific webhook id that is associated with the user API Key.
     *
     * @summary Get Webhook Logs
     * @throws FetchError<403, types.GetWebhookLogsResponse403> The API user key is invalid, or does not have permission to see the requested webhook.
     * @throws FetchError<404, types.GetWebhookLogsResponse404> The webhook does not exist.
     * @throws FetchError<500, types.GetWebhookLogsResponse500> Internal error
     */
    SDK.prototype.getWebhookLogs = function (metadata) {
        return this.core.fetch('/{companyDomain}/v1/webhooks/{id}/log', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
