declare const AddBenefitGroupEmployee: {
    readonly body: {
        readonly title: "Benefit Group Employee";
        readonly type: "object";
        readonly properties: {
            readonly benefitGroupId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly employeeId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "";
                readonly type: "string";
            };
            readonly endDate: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddCompanyFileCategory: {
    readonly body: {
        readonly title: "New Company File Category";
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly examples: readonly ["A new category"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddEmployee: {
    readonly body: {
        readonly title: "New Employee";
        readonly type: "object";
        readonly properties: {
            readonly firstName: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
                readonly examples: readonly ["Panda"];
            };
            readonly lastName: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
                readonly examples: readonly ["Bear"];
            };
        };
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly Location: {
                    readonly type: "string";
                    readonly description: "The URL to view the employee in the web app. The ID of the employee will be included.";
                };
            };
        };
    };
};
declare const AddEmployeeDependent: {
    readonly body: {
        readonly title: "Employee Dependent";
        readonly type: "object";
        readonly properties: {
            readonly employeeId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly firstName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly middleName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly lastName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly relationship: {
                readonly description: "";
                readonly type: "string";
            };
            readonly gender: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ssn: {
                readonly description: "";
                readonly type: "string";
            };
            readonly dateOfBirth: {
                readonly description: "";
                readonly type: "string";
            };
            readonly addressLine1: {
                readonly description: "";
                readonly type: "string";
            };
            readonly addressLine2: {
                readonly description: "";
                readonly type: "string";
            };
            readonly city: {
                readonly description: "";
                readonly type: "string";
            };
            readonly state: {
                readonly description: "";
                readonly type: "string";
            };
            readonly zipCode: {
                readonly description: "";
                readonly type: "string";
            };
            readonly homePhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly country: {
                readonly description: "";
                readonly type: "string";
            };
            readonly isUsCitizen: {
                readonly description: "";
                readonly type: "string";
            };
            readonly isStudent: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddEmployeeDeposit: {
    readonly body: {
        readonly title: "Employee Deposit";
        readonly type: "object";
        readonly properties: {
            readonly accounts: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly accountType: {
                            readonly type: "string";
                        };
                        readonly maskedAccountNumber: {
                            readonly type: "string";
                        };
                        readonly bankName: {
                            readonly type: "string";
                        };
                        readonly depositOrder: {
                            readonly type: "string";
                        };
                        readonly ruleType: {
                            readonly type: "string";
                        };
                        readonly ruleAmount: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee id.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const AddEmployeeFileCategory: {
    readonly body: {
        readonly title: "New Employee File Category";
        readonly type: "array";
        readonly items: {
            readonly type: "string";
        };
        readonly examples: readonly ["A new category"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddEmployeePaystub: {
    readonly body: {
        readonly title: "Employee Paystub";
        readonly type: "object";
        readonly properties: {
            readonly employeeId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly externalRecordId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payPeriodFrom: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payPeriodTo: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payDate: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorAdd1: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorAdd2: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorCity: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payorZip: {
                readonly description: "";
                readonly type: "string";
            };
            readonly payeeName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly currencyCode: {
                readonly description: "";
                readonly type: "string";
            };
            readonly net: {
                readonly description: "";
                readonly type: "string";
            };
            readonly gross: {
                readonly description: "";
                readonly type: "string";
            };
            readonly totalTaxes: {
                readonly description: "";
                readonly type: "string";
            };
            readonly totalDeductions: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ytdNet: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ytdGross: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ytdTaxes: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ytdDeductions: {
                readonly description: "";
                readonly type: "string";
            };
            readonly fedWitholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly federalType: {
                readonly description: "must be 2020_w4, pre_2020_w4, or null";
                readonly type: "string";
                readonly enum: readonly ["2020_w4", "pre_2020_w4"];
            };
            readonly twoJobs: {
                readonly description: "boolean value";
                readonly type: "string";
            };
            readonly dependentsAmount: {
                readonly description: "float value";
                readonly type: "string";
            };
            readonly otherIncome: {
                readonly description: "float value";
                readonly type: "string";
            };
            readonly deductionsAmount: {
                readonly description: "float value";
                readonly type: "string";
            };
            readonly stateWithholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly localWithholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalFed: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalLocal: {
                readonly description: "";
                readonly type: "string";
            };
            readonly taxState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly taxLocal: {
                readonly description: "";
                readonly type: "string";
            };
            readonly wages: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly externalWageId: {
                            readonly type: "string";
                        };
                        readonly wageDescription: {
                            readonly type: "string";
                        };
                        readonly wageAmount: {
                            readonly type: "string";
                        };
                        readonly ytdWageAmount: {
                            readonly type: "string";
                        };
                        readonly wageRate: {
                            readonly type: "string";
                        };
                        readonly hours: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly taxes: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly externalTaxId: {
                            readonly type: "string";
                        };
                        readonly taxDescription: {
                            readonly type: "string";
                        };
                        readonly taxAmount: {
                            readonly type: "string";
                        };
                        readonly ytdTaxAmount: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly deductions: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly externalDeductionId: {
                            readonly type: "string";
                        };
                        readonly deductionDescription: {
                            readonly type: "string";
                        };
                        readonly deductionAmount: {
                            readonly type: "string";
                        };
                        readonly ytdDeductionAmount: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly deposits: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly depositOrder: {
                            readonly type: "string";
                        };
                        readonly depositAmount: {
                            readonly type: "string";
                        };
                        readonly maskedAccountNumber: {
                            readonly type: "string";
                        };
                        readonly accountType: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddEmployeeTableRow: {
    readonly body: {
        readonly title: "Table Row Update";
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "";
                readonly type: "string";
            };
            readonly location: {
                readonly description: "";
                readonly type: "string";
            };
            readonly division: {
                readonly description: "";
                readonly type: "string";
            };
            readonly department: {
                readonly description: "";
                readonly type: "string";
            };
            readonly jobTitle: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reportsTo: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table"];
        }];
    };
};
declare const AddEmployeeTableRowV1: {
    readonly body: {
        readonly title: "Table Row Update";
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "";
                readonly type: "string";
            };
            readonly location: {
                readonly description: "";
                readonly type: "string";
            };
            readonly division: {
                readonly description: "";
                readonly type: "string";
            };
            readonly department: {
                readonly description: "";
                readonly type: "string";
            };
            readonly jobTitle: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reportsTo: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table"];
        }];
    };
};
declare const AddEmployeeUnpaidPaystubs: {
    readonly body: {
        readonly title: "Employee Unpaid Paystub";
        readonly type: "object";
        readonly properties: {
            readonly employeeId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly unpaidPeriods: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly payDate: {
                            readonly type: "string";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddEmployeeWithholding: {
    readonly body: {
        readonly title: "Employee Withholding";
        readonly type: "object";
        readonly properties: {
            readonly fedWithholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly stateWithholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly localWithholding: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalFed: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly additionalLocal: {
                readonly description: "";
                readonly type: "string";
            };
            readonly taxState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly taxLocal: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee id.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const AddHourRecord: {
    readonly body: {
        readonly title: "Time Tracking Record";
        readonly type: "object";
        readonly properties: {
            readonly timeTrackingId: {
                readonly description: "A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).";
                readonly type: "string";
                readonly maximum: 36;
            };
            readonly employeeId: {
                readonly description: "The ID of the employee.";
                readonly type: "integer";
            };
            readonly divisionId: {
                readonly description: "[Optional] The ID of the division for the employee.";
                readonly type: "integer";
            };
            readonly departmentId: {
                readonly description: "[Optional] The ID of the department for the employee.";
                readonly type: "integer";
            };
            readonly jobTitleId: {
                readonly description: "[Optional] The ID of the job title for the employee.";
                readonly type: "integer";
            };
            readonly payCode: {
                readonly description: "[Optional] Only necessary if the payroll provider requires a pay code";
                readonly type: "string";
                readonly maximum: 50;
            };
            readonly dateHoursWorked: {
                readonly description: "The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.";
                readonly type: "string";
            };
            readonly payRate: {
                readonly description: "[Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.";
                readonly type: "number";
                readonly format: "float";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
            readonly rateType: {
                readonly description: "The type of hours - regular or overtime. Please use either \"REG\" or \"OT\" here.";
                readonly type: "string";
            };
            readonly hoursWorked: {
                readonly description: "The number of hours worked.";
                readonly type: "number";
                readonly format: "float";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
            readonly jobCode: {
                readonly description: "[Optional] A job code.";
                readonly type: "integer";
            };
            readonly jobData: {
                readonly description: "[Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.";
                readonly type: "string";
            };
        };
        readonly required: readonly ["timeTrackingId", "employeeId", "dateHoursWorked", "rateType", "hoursWorked"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const AddNewCandidate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly firstName: {
                readonly description: "The first name of the candidate.";
                readonly type: "string";
            };
            readonly lastName: {
                readonly description: "The last name of the candidate.";
                readonly type: "string";
            };
            readonly email: {
                readonly description: "The email address of the candidate.";
                readonly type: "string";
            };
            readonly phoneNumber: {
                readonly description: "The phone number of the candidate.";
                readonly type: "string";
            };
            readonly source: {
                readonly description: "The source of the candidate application, e.g. LinkedIn, Indeed, etc.";
                readonly type: "string";
            };
            readonly jobId: {
                readonly description: "The id of the job opening for the candidate application.";
                readonly type: "integer";
            };
            readonly address: {
                readonly description: "The street address of the candidate.";
                readonly type: "string";
            };
            readonly city: {
                readonly description: "The city of the candidate.";
                readonly type: "string";
            };
            readonly state: {
                readonly description: "The state or province of the candidate. Accepts state name, abbreviation, or ISO code.";
                readonly type: "string";
            };
            readonly zip: {
                readonly description: "The zip code or postal code of the candidate.";
                readonly type: "string";
            };
            readonly country: {
                readonly description: "The country of the candidate. Accepts country name or ISO code.";
                readonly type: "string";
            };
            readonly linkedinUrl: {
                readonly description: "The LinkedIn profile url of the candidate.";
                readonly type: "string";
            };
            readonly dateAvailable: {
                readonly description: "The available start date of the candidate with the format YYYY-MM-DD.";
                readonly type: "string";
            };
            readonly desiredSalary: {
                readonly description: "The desired salary of the candidate.";
                readonly type: "string";
            };
            readonly referredBy: {
                readonly description: "The person or entity that referred the candidate.";
                readonly type: "string";
            };
            readonly websiteUrl: {
                readonly description: "The personal website, blog, or online portfolio of the candidate.";
                readonly type: "string";
            };
            readonly highestEducation: {
                readonly description: "The highest completed education level of the candidate.";
                readonly type: "string";
                readonly enum: readonly ["GED or Equivalent", "High School", "Some College", "College - Associates", "College - Bachelor of Arts", "College - Bachelor of Fine Arts", "College - Bachelor of Science", "College - Master of Arts", "College - Master of Fine Arts", "College - Master of Science", "College - Master of Business Administration", "College - Doctorate", "Medical Doctor", "Other"];
            };
            readonly collegeName: {
                readonly description: "The college or university of the candidate.";
                readonly type: "string";
            };
            readonly references: {
                readonly description: "A list of references supplied by the candidate.";
                readonly type: "string";
            };
            readonly resume: {
                readonly description: "Resume of the candidate.";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly coverLetter: {
                readonly description: "Cover letter of the candidate.";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly required: readonly ["firstName", "lastName", "jobId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddNewCompanyBenefit: {
    readonly formData: {
        readonly title: "Company Benefit Request";
        readonly type: "object";
        readonly required: readonly ["benefitType", "deductionTypeId", "startDate", "meetAcaMin", "minEssentialCoverage", "endDate"];
        readonly properties: {
            readonly companyBenefitName: {
                readonly description: "Name";
                readonly type: "string";
            };
            readonly benefitVendorId: {
                readonly description: "Benefit vendor ID";
                readonly type: "string";
            };
            readonly benefitType: {
                readonly description: "Benefit type";
                readonly type: "string";
                readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
            };
            readonly deductionTypeId: {
                readonly description: "Deduction type ID";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "Benefit start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly endDate: {
                readonly description: "Benefit end date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly description: {
                readonly description: "Description";
                readonly type: "string";
            };
            readonly planUrl: {
                readonly description: "Plan url";
                readonly type: "string";
            };
            readonly ssoLoginUrl: {
                readonly description: "SSO login url";
                readonly type: "string";
            };
            readonly ssoLoginUrlLinkText: {
                readonly description: "SSO login link text";
                readonly type: "string";
            };
            readonly safeHarbor: {
                readonly description: "Is a safe harbor";
                readonly type: "boolean";
            };
            readonly meetAcaMin: {
                readonly description: "Meets ACA minimum requirements";
                readonly type: "boolean";
            };
            readonly reimbursementAmount: {
                readonly description: "Reimbursement amount";
                readonly type: "number";
            };
            readonly reimbursementFrequency: {
                readonly description: "Reimbursement frequency";
                readonly type: "string";
                readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
            };
            readonly reimbursementCurrencyCode: {
                readonly description: "Reimbursement currency code";
                readonly type: "string";
            };
            readonly minEssentialCoverage: {
                readonly description: "Provides minimum essential coverage";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Company Benefit";
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly description: "Name";
                    readonly type: "string";
                };
                readonly benefitVendorId: {
                    readonly description: "Benefit vendor ID";
                    readonly type: "string";
                };
                readonly benefitType: {
                    readonly description: "Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`";
                    readonly type: "string";
                    readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
                };
                readonly deductionTypeId: {
                    readonly description: "Deduction type ID";
                    readonly type: "integer";
                };
                readonly startDate: {
                    readonly description: "Benefit start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Benefit end date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly description: {
                    readonly description: "Description";
                    readonly type: "string";
                };
                readonly planUrl: {
                    readonly description: "Plan url";
                    readonly type: "string";
                };
                readonly ssoLoginUrl: {
                    readonly description: "SSO login url";
                    readonly type: "string";
                };
                readonly ssoLoginUrlLinkText: {
                    readonly description: "SSO login link text";
                    readonly type: "string";
                };
                readonly safeHarbor: {
                    readonly description: "Is a safe harbor\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly meetAcaMin: {
                    readonly description: "Meets ACA minimum requirements\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly reimbursementAmount: {
                    readonly description: "Reimbursement amount";
                    readonly type: "number";
                };
                readonly reimbursementFrequency: {
                    readonly description: "Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`";
                    readonly type: "string";
                    readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
                };
                readonly minEssentialCoverage: {
                    readonly description: "Provides minimum essential coverage\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddNewEmployeeTrainingRecord: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["completed", "type"];
        readonly properties: {
            readonly completed: {
                readonly description: "Completed is a required field and must be in yyyy-mm-dd format.";
                readonly type: "string";
                readonly format: "date";
                readonly pattern: "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))";
                readonly examples: readonly ["2016-05-25"];
            };
            readonly cost: {
                readonly properties: {
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["USD"];
                    };
                    readonly cost: {
                        readonly type: "number";
                    };
                };
                readonly type: "object";
            };
            readonly instructor: {
                readonly type: "string";
                readonly examples: readonly ["Bob Jones"];
            };
            readonly hours: {
                readonly type: "number";
                readonly examples: readonly ["16"];
            };
            readonly credits: {
                readonly type: "number";
                readonly examples: readonly ["4"];
            };
            readonly notes: {
                readonly type: "string";
                readonly examples: readonly ["sample note"];
            };
            readonly type: {
                readonly description: "This must be an existing training type id.";
                readonly type: "integer";
                readonly default: 0;
                readonly examples: readonly ["4"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the employee to add a training record to.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the training record.";
                    readonly type: "integer";
                };
                readonly employeeId: {
                    readonly description: "The ID of the employee associated with the training.";
                    readonly type: "integer";
                };
                readonly completed: {
                    readonly description: "Completed is a date in the format yyyy-mm-dd.";
                    readonly type: "string";
                };
                readonly notes: {
                    readonly description: "Notes left on the training record.";
                    readonly type: "string";
                };
                readonly instructor: {
                    readonly description: "Name of the instructor.";
                    readonly type: "string";
                };
                readonly credits: {
                    readonly description: "What was credited for the training record.";
                    readonly type: "number";
                };
                readonly hours: {
                    readonly description: "Hours associated with the training record.";
                    readonly type: "number";
                };
                readonly cost: {
                    readonly description: "The currency and cost for the training record.";
                    readonly type: "string";
                };
                readonly type: {
                    readonly description: "The training type ID.";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddNewJobOpening: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly postingTitle: {
                readonly description: "The posting title of the job opening.";
                readonly type: "string";
            };
            readonly jobStatus: {
                readonly description: "The status of the job opening.";
                readonly type: "string";
                readonly enum: readonly ["Draft", "Open", "On Hold", "Filled", "Canceled"];
            };
            readonly hiringLead: {
                readonly description: "The employee id (from the v1/applicant_tracking/hiring_leads endpoint) of the hiring lead for the job opening.";
                readonly type: "integer";
            };
            readonly department: {
                readonly description: "The department of the job opening.";
                readonly type: "string";
            };
            readonly employmentType: {
                readonly description: "The type of employment offered in the job opening, e.g. Full-Time, Part-Time, Contractor, etc.";
                readonly type: "string";
            };
            readonly minimumExperience: {
                readonly description: "The minimum experience level that qualifies a candidate for the job opening.";
                readonly type: "string";
                readonly enum: readonly ["Entry-level", "Mid-level", "Experienced", "Manager/Supervisor", "Senior Manager/Supervisor'", "Executive", "Senior Executive"];
            };
            readonly compensation: {
                readonly description: "The pay rate or compensation for the job opening.";
                readonly type: "string";
            };
            readonly jobLocation: {
                readonly description: "The location id (from the v1/applicant_tracking/locations endpoint) of the job opening. Omit this parameter for a remote job location.";
                readonly type: "integer";
            };
            readonly jobDescription: {
                readonly description: "The long-form text description of the job opening.";
                readonly type: "string";
            };
            readonly applicationQuestionResume: {
                readonly description: "Whether the job opening application has a standard question for resume (true) or not (false) or if uploading a resume is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionAddress: {
                readonly description: "Whether the job opening application has a standard question for address (true) or not (false) or if entering an address is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionLinkedinUrl: {
                readonly description: "Whether the job opening application has a standard question for LinkedIn profile url (true) or not (false) or if entering a LinkedIn profile url is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionDateAvailable: {
                readonly description: "Whether the job opening application has a standard question for availability date (true) or not (false) or if entering an availability date is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionDesiredSalary: {
                readonly description: "Whether the job opening application has a standard question for desired salary (true) or not (false) or if entering a desired salary is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionCoverLetter: {
                readonly description: "Whether the job opening application has a standard question for cover letter (true) or not (false) or if uploading a cover letter is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionReferredBy: {
                readonly description: "Whether the job opening application has a standard question for referred by (true) or not (false) or if entering referred by is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionWebsiteUrl: {
                readonly description: "Whether the job opening application has a standard question for website url (true) or not (false) or if entering a website url is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionHighestEducation: {
                readonly description: "Whether the job opening application has a standard question for highest education (true) or not (false) or if entering highest education is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionCollege: {
                readonly description: "Whether the job opening application has a standard question for college (true) or not (false) or if entering a college is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly applicationQuestionReferences: {
                readonly description: "Whether the job opening application has a standard question for references (true) or not (false) or if entering references is mandatory (required).";
                readonly type: "string";
                readonly enum: readonly [true, false, "Required"];
            };
            readonly internalJobCode: {
                readonly description: "The internal job code for the job opening.";
                readonly type: "string";
            };
        };
        readonly required: readonly ["postingTitle", "jobStatus", "hiringLead", "employmentType", "jobDescription"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddTrainingCategory: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly description: "Name of the new training category.";
                readonly type: "string";
                readonly examples: readonly ["My New Training Category"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly description: "The category ID and name";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddTrainingType: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "required"];
        readonly properties: {
            readonly name: {
                readonly description: "Name of the new training type.";
                readonly type: "string";
                readonly examples: readonly ["My New Training"];
            };
            readonly frequency: {
                readonly description: "The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.";
                readonly type: "integer";
                readonly default: "12";
                readonly examples: readonly ["12"];
            };
            readonly renewable: {
                readonly description: "Renewable is optional but if you are setting it to true you must pass a frequency which is the months between renewals.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly category: {
                readonly type: "object";
                readonly description: "The category is optional and you can pass either a category id or a category name.";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly description: "Category ID";
                        readonly examples: readonly [3];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Category Name";
                        readonly examples: readonly ["First Aid Trainings"];
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock in location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address...";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
            readonly required: {
                readonly description: "Is this a required training?";
                readonly type: "boolean";
            };
            readonly dueFromHireDate: {
                readonly description: "Number of days before the training is due for new hires. Not valid unless training is required.";
                readonly type: "integer";
                readonly default: "30";
            };
            readonly linkUrl: {
                readonly description: "Optional URL that can be included with a training.";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description for the training.";
                readonly type: "string";
            };
            readonly allowEmployeesToMarkComplete: {
                readonly description: "Allows all employees who can view the training to be able to mark it complete.";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the training";
                    readonly type: "integer";
                };
                readonly name: {
                    readonly description: "Name of the training type.";
                    readonly type: "string";
                };
                readonly renewable: {
                    readonly description: "If true, training will be renewed based off of frequency.";
                    readonly type: "boolean";
                };
                readonly frequency: {
                    readonly description: "The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.";
                    readonly type: "integer";
                };
                readonly dueFromHireDate: {
                    readonly description: "Number of days before the training is due for new hires. Not valid if training is not required.";
                    readonly type: "integer";
                };
                readonly required: {
                    readonly description: "Is this a required training?";
                    readonly type: "integer";
                };
                readonly category: {
                    readonly description: "The category ID and name";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                    };
                };
                readonly linkUrl: {
                    readonly description: "Optional URL that can be included with a training.";
                    readonly type: "string";
                };
                readonly description: {
                    readonly description: "Description for the training.";
                    readonly type: "string";
                };
                readonly allowEmployeesToMarkComplete: {
                    readonly description: "Allows all employees who can view the training to be able to mark it complete.";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ApproveEmployeeTimesheets: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["lastChanged", "timesheets"];
        readonly properties: {
            readonly lastChanged: {
                readonly type: "integer";
                readonly description: "UNIX timestamp for last change to timesheet";
                readonly examples: readonly [1624485787];
            };
            readonly timesheets: {
                readonly type: "array";
                readonly description: "Array of timesheet objects that contain the timesheet id";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly timesheetId: {
                            readonly type: "integer";
                            readonly description: "The id of the timesheet";
                            readonly examples: readonly [100];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const BulkRecordHours: {
    readonly body: {
        readonly title: "Time Tracking Record Bulk";
        readonly type: "array";
        readonly items: {
            readonly title: "Time Tracking Record";
            readonly type: "object";
            readonly properties: {
                readonly timeTrackingId: {
                    readonly description: "A unique identifier for the record. Use this ID to adjust or delete these hours. It can be any ID you use to track the record up to 36 characters in length. (i.e. UUID).";
                    readonly type: "string";
                    readonly maximum: 36;
                };
                readonly employeeId: {
                    readonly description: "The ID of the employee.";
                    readonly type: "integer";
                };
                readonly divisionId: {
                    readonly description: "[Optional] The ID of the division for the employee.";
                    readonly type: "integer";
                };
                readonly departmentId: {
                    readonly description: "[Optional] The ID of the department for the employee.";
                    readonly type: "integer";
                };
                readonly jobTitleId: {
                    readonly description: "[Optional] The ID of the job title for the employee.";
                    readonly type: "integer";
                };
                readonly payCode: {
                    readonly description: "[Optional] Only necessary if the payroll provider requires a pay code";
                    readonly type: "string";
                    readonly maximum: 50;
                };
                readonly dateHoursWorked: {
                    readonly description: "The date the hours were worked. Please use the ISO-8601 date format YYYY-MM-DD.";
                    readonly type: "string";
                };
                readonly payRate: {
                    readonly description: "[Optional] The rate of pay. e.g. $15.00/hour should use 15.00 here. Only necessary if the payroll provider requires a pay rate.";
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly rateType: {
                    readonly description: "The type of hours - regular or overtime. Please use either \"REG\" or \"OT\" here.";
                    readonly type: "string";
                };
                readonly hoursWorked: {
                    readonly description: "The number of hours worked.";
                    readonly type: "number";
                    readonly format: "float";
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                };
                readonly jobCode: {
                    readonly description: "[Optional] A job code.";
                    readonly type: "integer";
                };
                readonly jobData: {
                    readonly description: "[Optional] A list of up to four 20 characters max job numbers in comma delimited format with no spaces.";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["timeTrackingId", "employeeId", "dateHoursWorked", "rateType", "hoursWorked"];
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const ClearEmployeeDeposit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const ClearEmployeePaystub: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the paystub (record) ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const ClearEmployeeUnpaidPaystubs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee id.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly "X-BambooHR-Message": {
                    readonly type: "string";
                    readonly description: "Human readable error to help when debugging, suitable for logging";
                };
            };
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly "X-BambooHR-Message": {
                    readonly type: "string";
                    readonly description: "Human readable error to help when debugging, suitable for logging";
                };
            };
        };
    };
};
declare const ClearEmployeeWithholding: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee id.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const ClockIn: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start: {
                readonly type: "string";
                readonly description: "The start time for the clock in. In 24 hour format HH:MM";
                readonly examples: readonly ["13:00"];
            };
            readonly timezone: {
                readonly type: "string";
                readonly description: "The timezone associated with the clock in.";
                readonly examples: readonly ["America/Denver"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "The note associated with the clock in";
                readonly examples: readonly ["Back from lunch."];
            };
            readonly projectId: {
                readonly type: "integer";
                readonly description: "The id of the project associated with the clock in";
                readonly examples: readonly ["3"];
            };
            readonly taskId: {
                readonly type: "integer";
                readonly description: "The id of the task associated with the clock in";
                readonly examples: readonly ["2"];
            };
            readonly clockInLocation: {
                readonly type: "object";
                readonly properties: {
                    readonly latitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [40.332729];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly longitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [-111.729235];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock in location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{employeeId} is id of the employee clocking out";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const ClockInData: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly start: {
                readonly type: "string";
                readonly description: "The start time for the clock in. In 24 hour format HH:MM";
                readonly examples: readonly ["13:00"];
            };
            readonly timezone: {
                readonly type: "string";
                readonly description: "The timezone associated with the clock in.";
                readonly examples: readonly ["America/Denver"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "The note associated with the clock in";
                readonly examples: readonly ["Back from lunch."];
            };
            readonly projectId: {
                readonly type: "integer";
                readonly description: "The id of the project associated with the clock in";
                readonly examples: readonly ["3"];
            };
            readonly taskId: {
                readonly type: "integer";
                readonly description: "The id of the task associated with the clock in";
                readonly examples: readonly ["2"];
            };
            readonly clockInLocation: {
                readonly type: "object";
                readonly properties: {
                    readonly latitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [40.332729];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly longitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [-111.729235];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock in location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
            readonly clockOutLocation: {
                readonly type: "object";
                readonly properties: {
                    readonly latitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [40.332729];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly longitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [-111.729235];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock in location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to whom the projects belong.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const ClockInEmployee: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly projectId: {
                readonly type: "integer";
                readonly description: "id of the time tracking project that should be associated with the timesheet entry. Required if taskId is specified.";
                readonly examples: readonly ["10"];
            };
            readonly taskId: {
                readonly type: "integer";
                readonly description: "id of the time tracking task that should be associated with the timesheet entry.";
                readonly examples: readonly ["25"];
            };
            readonly note: {
                readonly type: "string";
                readonly description: "The note that should be associated with the timesheet entry";
                readonly examples: readonly ["Back from lunch."];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to clock in.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Timesheet Entry";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "ID of the entry.";
                    readonly type: "integer";
                };
                readonly employeeId: {
                    readonly description: "ID of the employee associated with the entry.";
                    readonly type: "integer";
                };
                readonly type: {
                    readonly description: "type of the entry.\n\n`hour` `clock`";
                    readonly enum: readonly ["hour", "clock"];
                    readonly type: "string";
                };
                readonly start: {
                    readonly description: "Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.";
                    readonly type: "string";
                };
                readonly end: {
                    readonly description: "Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.";
                    readonly type: "string";
                };
                readonly timezone: {
                    readonly description: "The timezone the clock entry was recorded in. Property can be null.";
                    readonly type: "string";
                };
                readonly hours: {
                    readonly description: "The number of hours for the entry. This value has a maximum scale of 4. Property can be null.";
                    readonly type: "number";
                };
                readonly note: {
                    readonly description: "The note associated with the entry. Property can be null.";
                    readonly type: "string";
                };
                readonly projectInfo: {
                    readonly title: "Time Tracking Project Info";
                    readonly type: "object";
                    readonly properties: {
                        readonly project: {
                            readonly title: "Time Tracking Project";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the project.";
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly description: "Name of the project.";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly task: {
                            readonly title: "Time Tracking Task";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the task.";
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly description: "Name of the task.";
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly approved: {
                    readonly description: "Approval status of the timesheet for the entry.";
                    readonly type: "boolean";
                };
                readonly approvedAt: {
                    readonly description: "Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ClockOut: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly clockOutLocation: {
                readonly type: "object";
                readonly properties: {
                    readonly latitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [40.332729];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly longitude: {
                        readonly type: "number";
                        readonly format: "double";
                        readonly examples: readonly [-111.729235];
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock out location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{employeeId} is id of the employee clocking out";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const ClockOutAndApproveEmployeeTimesheets: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly clockOuts: {
                readonly type: "array";
                readonly description: "Array of clock out information";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["timesheetId", "end", "date"];
                    readonly properties: {
                        readonly timesheetId: {
                            readonly type: "integer";
                            readonly description: "The id of the timesheet";
                            readonly examples: readonly [100];
                        };
                        readonly end: {
                            readonly type: "string";
                            readonly description: "24 hour format (hh:mm) for clock out time";
                            readonly examples: readonly ["17:30"];
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "Date of the clock out. Date string format (YYYY-MM-DD)";
                            readonly examples: readonly ["2021-04-23"];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const ClockOutEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to clock out.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Timesheet Entry";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "ID of the entry.";
                    readonly type: "integer";
                };
                readonly employeeId: {
                    readonly description: "ID of the employee associated with the entry.";
                    readonly type: "integer";
                };
                readonly type: {
                    readonly description: "type of the entry.\n\n`hour` `clock`";
                    readonly enum: readonly ["hour", "clock"];
                    readonly type: "string";
                };
                readonly start: {
                    readonly description: "Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.";
                    readonly type: "string";
                };
                readonly end: {
                    readonly description: "Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.";
                    readonly type: "string";
                };
                readonly timezone: {
                    readonly description: "The timezone the clock entry was recorded in. Property can be null.";
                    readonly type: "string";
                };
                readonly hours: {
                    readonly description: "The number of hours for the entry. This value has a maximum scale of 4. Property can be null.";
                    readonly type: "number";
                };
                readonly note: {
                    readonly description: "The note associated with the entry. Property can be null.";
                    readonly type: "string";
                };
                readonly projectInfo: {
                    readonly title: "Time Tracking Project Info";
                    readonly type: "object";
                    readonly properties: {
                        readonly project: {
                            readonly title: "Time Tracking Project";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the project.";
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly description: "Name of the project.";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly task: {
                            readonly title: "Time Tracking Task";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID of the task.";
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly description: "Name of the task.";
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly approved: {
                    readonly description: "Approval status of the timesheet for the entry.";
                    readonly type: "boolean";
                };
                readonly approvedAt: {
                    readonly description: "Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ClockOutEmployeeAtSpecificTime: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly datetime: {
                readonly type: "string";
                readonly description: "Date time for clock out in atom format. ";
                readonly examples: readonly ["2020-12-16T17:28:00-05:00"];
            };
            readonly timezone: {
                readonly type: "string";
                readonly description: "Timezone of the time entry";
                readonly examples: readonly ["America/Denver"];
            };
            readonly employeeId: {
                readonly type: "integer";
                readonly description: "The employeeId for the time entry.";
                readonly examples: readonly [40342];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to whom the projects belong.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const CreateTimeTrackingProject: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the project.";
                readonly examples: readonly ["Project A"];
            };
            readonly billable: {
                readonly type: "boolean";
                readonly description: "Indicates if the project is billable. Defaults to true if not provided.";
            };
            readonly allowAllEmployees: {
                readonly type: "boolean";
                readonly description: "Indicates if all employees can log time for this project. Defaults to true if not provided.";
            };
            readonly employeeIds: {
                readonly type: "array";
                readonly description: "A list of employee IDs that can log time for this project.";
                readonly items: {
                    readonly type: "integer";
                };
            };
            readonly hasTasks: {
                readonly type: "boolean";
                readonly description: "Indicates if the project has tasks. Defaults to false if not provided.";
            };
            readonly tasks: {
                readonly type: "array";
                readonly description: "List of tasks to create and associate with the project.";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["name"];
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the task.";
                        };
                        readonly billable: {
                            readonly type: "boolean";
                            readonly description: "Indicates if the tasks is billable. Defaults to true if not provided.";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly title: "Time tracking project with tasks and list of employee IDs.";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "ID of the project.";
                    readonly type: "integer";
                };
                readonly name: {
                    readonly description: "Name of the project.";
                    readonly type: "string";
                };
                readonly tasks: {
                    readonly description: "A list of time tracking tasks for the project.";
                    readonly type: "array";
                    readonly items: {
                        readonly title: "Time Tracking Task";
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "ID of the task.";
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly description: "Name of the task.";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly employeeIds: {
                    readonly description: "A list of employee IDs that can log time for this project. If not present, all employees can log time for the project.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "integer";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteClockEntries: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly clockEntryIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
                readonly examples: readonly [10, 11, 12];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const DeleteCompanyBenefit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the company benefit ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const DeleteCompanyFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the company file being deleted.";
                };
            };
            readonly required: readonly ["companyDomain", "fileId"];
        }];
    };
};
declare const DeleteEmployeeFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the employee file being deleted.";
                };
            };
            readonly required: readonly ["companyDomain", "id", "fileId"];
        }];
    };
};
declare const DeleteEmployeeTableRowV1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Row ID";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table", "rowId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly sucess: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteEmployeeTrainingRecord: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeTrainingRecordId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training record to delete.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeTrainingRecordId"];
        }];
    };
};
declare const DeleteGoal: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
};
declare const DeleteGoalComment: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
                readonly commentId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "commentId is the ID of a specific comment for the specified goal.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId", "commentId"];
        }];
    };
};
declare const DeleteHourRecord: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const DeleteTimesheetClockEntries: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["clockEntryIds"];
        readonly properties: {
            readonly clockEntryIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const DeleteTimesheetHourEntries: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["hourEntryIds"];
        readonly properties: {
            readonly hourEntryIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const DeleteTrainingCategory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly trainingCategoryId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training category to delete.";
                };
            };
            readonly required: readonly ["companyDomain", "trainingCategoryId"];
        }];
    };
};
declare const DeleteTrainingType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly trainingTypeId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training type to delete.";
                };
            };
            readonly required: readonly ["companyDomain", "trainingTypeId"];
        }];
    };
};
declare const DeleteWebhook: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an webhook ID that is associated with the User API key.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "403": {
            readonly title: "Webhook 403 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["You do not have access to webhook ID: 5"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly title: "Webhook 404 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["No webhook was found with ID: 7."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const EditHourRecord: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly timeTrackingId: {
                readonly type: "string";
                readonly description: "The time tracking id is the id that was used to track the record up to 36 characters in length. (i.e. UUID).";
            };
            readonly hoursWorked: {
                readonly type: "number";
                readonly format: "float";
                readonly description: "The updated number of hours worked. e.g. if Employee A worked 8.0 hours originally and decided they only worked 6.0, please send 6.0 here not -2.0.";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
        };
        readonly required: readonly ["timeTrackingId", "hoursWorked"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const EstimateFutureTimeOffBalances: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["end"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAListOfUsers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const GetAListOfWhoSOut: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A date in the form YYYY-MM-DD - defaults to the current date.";
                };
                readonly end: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A date in the form YYYY-MM-DD - defaults to 14 days from the start date.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApplicationDetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly applicationId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the application to look up details.";
                };
            };
            readonly required: readonly ["companyDomain", "applicationId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApplications: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The page number";
                };
                readonly jobId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A Job Id to limit results to";
                };
                readonly applicationStatusId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Application status id to filter by.";
                };
                readonly applicationStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["ALL", "ALL_ACTIVE", "NEW", "ACTIVE", "INACTIVE", "HIRED"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A list of application status groups to filter by.";
                };
                readonly jobStatusGroups: {
                    readonly type: "string";
                    readonly enum: readonly ["ALL", "DRAFT_AND_OPEN", "Open", "Filled", "Draft", "Deleted", "On Hold", "Canceled"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A list of position status groups to filter by.";
                };
                readonly searchString: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A general search criteria by which to find applications.";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly enum: readonly ["first_name", "job_title", "rating", "phone", "status", "last_updated", "created_date"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A specific field to sort the results by.";
                };
                readonly sortOrder: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order by which to sort results.";
                };
                readonly newSince: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Only get applications newer than a given UTC timestamp, for example 2024-01-01 13:00:00";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBenefitCoverages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitDeductionTypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const GetBenefitGroupEmployees: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitGroupPlanCosts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitGroupPlans: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitGroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitPlanCoverages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBenefitPlans: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetCanCreateGoal: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const GetChangedEmployeeIds: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly since: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "URL encoded iso8601 timestamp";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Use one of these in the {type} variable in the URL: \"inserted\", \"updated\", \"deleted\"";
                };
            };
            readonly required: readonly ["since"];
        }];
    };
};
declare const GetChangedEmployeeTableData: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
            };
            readonly required: readonly ["companyDomain", "table"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly since: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "URL encoded iso8601 timestamp";
                };
            };
            readonly required: readonly ["since"];
        }];
    };
};
declare const GetClockEntry: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of employee to whom the clock entry belongs.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the id to whom the clock entry belongs.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "id"];
        }];
    };
};
declare const GetCompanyBenefit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the company benefit ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Company Benefit";
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly description: "Name";
                    readonly type: "string";
                };
                readonly benefitVendorId: {
                    readonly description: "Benefit vendor ID";
                    readonly type: "string";
                };
                readonly benefitType: {
                    readonly description: "Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`";
                    readonly type: "string";
                    readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
                };
                readonly deductionTypeId: {
                    readonly description: "Deduction type ID";
                    readonly type: "integer";
                };
                readonly startDate: {
                    readonly description: "Benefit start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Benefit end date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly description: {
                    readonly description: "Description";
                    readonly type: "string";
                };
                readonly planUrl: {
                    readonly description: "Plan url";
                    readonly type: "string";
                };
                readonly ssoLoginUrl: {
                    readonly description: "SSO login url";
                    readonly type: "string";
                };
                readonly ssoLoginUrlLinkText: {
                    readonly description: "SSO login link text";
                    readonly type: "string";
                };
                readonly safeHarbor: {
                    readonly description: "Is a safe harbor\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly meetAcaMin: {
                    readonly description: "Meets ACA minimum requirements\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly reimbursementAmount: {
                    readonly description: "Reimbursement amount";
                    readonly type: "number";
                };
                readonly reimbursementFrequency: {
                    readonly description: "Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`";
                    readonly type: "string";
                    readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
                };
                readonly minEssentialCoverage: {
                    readonly description: "Provides minimum essential coverage\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyBenefitTypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Company Benefit Type";
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly description: "The name of the company benefit plan.";
                        readonly type: "string";
                    };
                    readonly slug: {
                        readonly description: "The unique identifier for the company benefit plan.";
                        readonly type: "string";
                    };
                    readonly canBeAcaPlan: {
                        readonly description: "Can the company benefit plan be an ACA plan.";
                        readonly type: "boolean";
                    };
                    readonly canCoExistEnrollment: {
                        readonly description: "Can the company benefit plan co-exist with an enrollment plan.";
                        readonly type: "boolean";
                    };
                    readonly isReimbursementPlan: {
                        readonly description: "Is the company benefit plan a reimbursement plan.";
                        readonly type: "boolean";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyBenefits: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Company Benefit";
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly description: "Name";
                        readonly type: "string";
                    };
                    readonly benefitVendorId: {
                        readonly description: "Benefit vendor ID";
                        readonly type: "string";
                    };
                    readonly benefitType: {
                        readonly description: "Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`";
                        readonly type: "string";
                        readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
                    };
                    readonly deductionTypeId: {
                        readonly description: "Deduction type ID";
                        readonly type: "integer";
                    };
                    readonly startDate: {
                        readonly description: "Benefit start date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                    readonly endDate: {
                        readonly description: "Benefit end date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                    readonly description: {
                        readonly description: "Description";
                        readonly type: "string";
                    };
                    readonly planUrl: {
                        readonly description: "Plan url";
                        readonly type: "string";
                    };
                    readonly ssoLoginUrl: {
                        readonly description: "SSO login url";
                        readonly type: "string";
                    };
                    readonly ssoLoginUrlLinkText: {
                        readonly description: "SSO login link text";
                        readonly type: "string";
                    };
                    readonly safeHarbor: {
                        readonly description: "Is a safe harbor\n\n`yes` `no`";
                        readonly type: "string";
                        readonly enum: readonly ["yes", "no", any];
                    };
                    readonly meetAcaMin: {
                        readonly description: "Meets ACA minimum requirements\n\n`yes` `no`";
                        readonly type: "string";
                        readonly enum: readonly ["yes", "no", any];
                    };
                    readonly reimbursementAmount: {
                        readonly description: "Reimbursement amount";
                        readonly type: "number";
                    };
                    readonly reimbursementFrequency: {
                        readonly description: "Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`";
                        readonly type: "string";
                        readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
                    };
                    readonly minEssentialCoverage: {
                        readonly description: "Provides minimum essential coverage\n\n`yes` `no`";
                        readonly type: "string";
                        readonly enum: readonly ["yes", "no", any];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the company file being retrieved.";
                };
            };
            readonly required: readonly ["companyDomain", "fileId"];
        }];
    };
};
declare const GetCompanyLocations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly location: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "The ID of the location";
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly description: "Name of the location";
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly description: "Description of the location";
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly description: "City of the location";
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The ID of the state";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "The name of the state";
                                        readonly type: "string";
                                    };
                                    readonly abbrev: {
                                        readonly description: "The abbreviation of the state";
                                        readonly type: "string";
                                    };
                                    readonly iso_code: {
                                        readonly description: "The ISO standard code of the state";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly country: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The ID of the country";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "The name of the country";
                                        readonly type: "string";
                                    };
                                    readonly iso_code: {
                                        readonly description: "The ISO standard code of the country";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly zipcode: {
                                readonly description: "The ZIP or postal code of the location";
                                readonly type: "string";
                            };
                            readonly addressLine1: {
                                readonly description: "The first address line of the location";
                                readonly type: "string";
                            };
                            readonly addressLine2: {
                                readonly description: "The second address line of the location";
                                readonly type: "string";
                            };
                            readonly phone: {
                                readonly description: "The phone number of the location";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCompanyReport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is a report ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON";
                };
                readonly fd: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "yes=apply standard duplicate field filtering, no=return the raw results with no duplicate filtering. Default value is \"yes\"";
                };
                readonly onlyCurrent: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Setting to false will return future dated values from history table fields.";
                };
            };
            readonly required: readonly ["format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetDailyEntry: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of employee to whom the daily entry belongs.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "the id to whom the daily entry belongs.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "id"];
        }];
    };
};
declare const GetEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly fields: {
                    readonly type: "string";
                    readonly default: "firstName,lastName";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fields} is a comma separated list of values taken from the official list of field names. ";
                };
                readonly onlyCurrent: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Setting to false will return future dated values from history table fields.";
                };
            };
            readonly required: readonly ["fields"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the employee";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEmployeeBenefit: {
    readonly body: {
        readonly title: "Employee Benefit Filters";
        readonly type: "object";
        readonly properties: {
            readonly filters: {
                readonly type: "object";
                readonly description: "At least one filter is required";
                readonly properties: {
                    readonly employeeId: {
                        readonly description: "Employee Id";
                        readonly type: "integer";
                    };
                    readonly companyBenefitId: {
                        readonly description: "Company Benefit Id";
                        readonly type: "integer";
                    };
                    readonly enrollmentStatusEffectiveDate: {
                        readonly description: "Enrollment Status Effective Date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Employee Benefit";
                readonly type: "object";
                readonly properties: {
                    readonly employeeId: {
                        readonly description: "Employee ID";
                        readonly type: "integer";
                    };
                    readonly companyBenefitId: {
                        readonly description: "Company benefit ID";
                        readonly type: "integer";
                    };
                    readonly companyBenefitName: {
                        readonly description: "Company benefit name";
                        readonly type: "string";
                    };
                    readonly coverageLevel: {
                        readonly description: "Coverage level";
                        readonly type: "string";
                    };
                    readonly deductionEndDate: {
                        readonly description: "Deduction end date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                    readonly deductionStartDate: {
                        readonly description: "Deduction start date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                    readonly enrollmentStatus: {
                        readonly description: "Enrollment status\n\n`Eligible` `Enrolled` `Waived` `Withdrawn` `Terminated` `Ineligible`";
                        readonly type: "string";
                        readonly enum: readonly ["Eligible", "Enrolled", "Waived", "Withdrawn", "Terminated", "Ineligible"];
                    };
                    readonly effectiveDate: {
                        readonly description: "Enrollment status effective date";
                        readonly type: "string";
                        readonly format: "date";
                    };
                    readonly currencyCode: {
                        readonly description: "Currency code";
                        readonly type: "string";
                    };
                    readonly employeeAmount: {
                        readonly description: "Employee amount";
                        readonly type: "number";
                    };
                    readonly employeeAmountType: {
                        readonly description: "Employee amount type";
                        readonly type: "string";
                    };
                    readonly employeePercentBasedOn: {
                        readonly description: "Employee percent based on";
                        readonly type: "string";
                    };
                    readonly employeeCapAmount: {
                        readonly description: "Employee cap amount";
                        readonly type: "number";
                    };
                    readonly employeeCapAmountType: {
                        readonly description: "Employee cap amount type";
                        readonly type: "string";
                    };
                    readonly employeeAnnualMax: {
                        readonly description: "Employee annual max";
                        readonly type: "number";
                    };
                    readonly companyAmount: {
                        readonly description: "Company amount";
                        readonly type: "number";
                    };
                    readonly companyAmountType: {
                        readonly description: "Company amount type";
                        readonly type: "string";
                    };
                    readonly companyPercentBasedOn: {
                        readonly description: "Company percent based on";
                        readonly type: "string";
                    };
                    readonly companyCapAmount: {
                        readonly description: "Company cap amount";
                        readonly type: "number";
                    };
                    readonly companyCapAmountType: {
                        readonly description: "Company cap amount type";
                        readonly type: "string";
                    };
                    readonly companyAnnualMax: {
                        readonly description: "Company annual max";
                        readonly type: "number";
                    };
                    readonly benefitPlanCoverageId: {
                        readonly description: "Benefit Plan Coverage ID";
                        readonly type: "number";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEmployeeDeductionsByPlan: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the benefit plan ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEmployeeDependent: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee dependent ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEmployeeDependents: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly employeeid: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{employeeid} is the employee ID. Supplying this ID limits the response to the specific employee.";
                };
            };
            readonly required: readonly ["employeeid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEmployeeDepositAccounts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const GetEmployeeFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the employee file being retrieved.";
                };
            };
            readonly required: readonly ["companyDomain", "id", "fileId"];
        }];
    };
};
declare const GetEmployeePaystub: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the paystub (record) ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const GetEmployeePhoto: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID for the employee you are getting the photo for.";
                };
                readonly size: {
                    readonly type: "string";
                    readonly enum: readonly ["original", "large", "medium", "xs", "tiny"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Photo size";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "size"];
        }];
    };
};
declare const GetEmployeeProjects: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to retrieve projects for.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "List of time tracking projects with tasks.";
                readonly type: "array";
                readonly items: {
                    readonly title: "Time tracking project with tasks.";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "ID of the project.";
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly description: "Name of the project.";
                            readonly type: "string";
                        };
                        readonly tasks: {
                            readonly description: "A list of time tracking tasks for the project.";
                            readonly type: "array";
                            readonly items: {
                                readonly title: "Time Tracking Task";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the task.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the task.";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEmployeeTableRow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table"];
        }];
    };
};
declare const GetEmployeeTimesheet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of employee to whom the timesheet belongs.";
                };
                readonly timesheetId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "timesheetId is the id to whom the timesheet belongs.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "timesheetId"];
        }];
    };
};
declare const GetEmployeeUnpaidPaystubs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const GetEmployeeWithholdings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const GetEmployeesDirectory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the employee";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalAggregate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the Goal ID used to generate the aggregate information.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "The selected goal object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
                readonly canAlign: {
                    readonly type: "boolean";
                    readonly description: "The selected user can align goals with other users.";
                    readonly examples: readonly ["false"];
                };
                readonly canCreateGoals: {
                    readonly type: "boolean";
                    readonly description: "The selected user can create a goal.";
                    readonly examples: readonly ["true"];
                };
                readonly alignsWithOptions: {
                    readonly type: "array";
                    readonly description: "All possible goals that this goal could be aligned with.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Id of the goal that the selected goal could be aligned with.";
                                readonly examples: readonly ["8"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the goal that the selected goal could be aligned with.";
                                readonly examples: readonly ["Get all team goals for January complete."];
                            };
                        };
                    };
                };
                readonly comments: {
                    readonly type: "array";
                    readonly description: "Comments linked to selected goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Id of the comment.";
                                readonly examples: readonly ["2"];
                            };
                            readonly authorUserId: {
                                readonly type: "integer";
                                readonly description: "Id of the author of the comment.";
                                readonly examples: readonly ["1534"];
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "The date and time that the comment was created.";
                                readonly examples: readonly ["2022-05-23T17:32:42Z"];
                            };
                            readonly text: {
                                readonly type: "string";
                                readonly description: "The actual text of the comment.";
                                readonly examples: readonly ["This goal is taking longer than I thought."];
                            };
                            readonly canEdit: {
                                readonly type: "boolean";
                                readonly description: "Can the comment be edited.";
                                readonly examples: readonly ["ture"];
                            };
                            readonly canDelete: {
                                readonly type: "boolean";
                                readonly description: "Can the comment be deleted.";
                                readonly examples: readonly ["ture"];
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly description: "A list of people with access to the goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly employeeId: {
                                readonly type: "integer";
                                readonly description: "The id of this employee.";
                                readonly examples: readonly ["4353"];
                            };
                            readonly userId: {
                                readonly type: "integer";
                                readonly description: "The user id of the person if applicable.";
                                readonly examples: readonly ["45"];
                            };
                            readonly displayFirstName: {
                                readonly type: "string";
                                readonly description: "First name of the person.";
                                readonly examples: readonly ["Tim"];
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "Last name of the person.";
                                readonly examples: readonly ["Johnson"];
                            };
                            readonly photoUrl: {
                                readonly type: "string";
                                readonly description: "url of the user profile image.";
                                readonly examples: readonly ["https://tim.johnson.jpg"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalComments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
};
declare const GetGoals: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID to whom the goals are assigned.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly filter: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A filter that can be applied to only show the goals that are in a certain state.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly goals: {
                    readonly type: "array";
                    readonly description: "All goals of the selected employee";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "An individual goal";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "The id of the goal.";
                                readonly examples: readonly ["4"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the goal.";
                                readonly examples: readonly ["Complete Documentation Epic"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "A description of the goal.";
                                readonly examples: readonly ["Document every endpoint for the goals API."];
                            };
                            readonly percentComplete: {
                                readonly type: "integer";
                                readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                                readonly examples: readonly ["100"];
                            };
                            readonly alignsWithOptionId: {
                                readonly type: "integer";
                            };
                            readonly sharedWithEmployeeIds: {
                                readonly type: "array";
                                readonly description: "Ids of the employees that have access to this goal.";
                                readonly items: {
                                    readonly type: "integer";
                                    readonly examples: readonly ["89"];
                                };
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The due date of the goal.";
                                readonly examples: readonly ["2021-12-17"];
                            };
                            readonly completionDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date the goal was completed.";
                                readonly examples: readonly ["2021-12-16"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the goal.";
                                readonly examples: readonly ["in_progress"];
                            };
                            readonly milestones: {
                                readonly type: "array";
                                readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "An individual milestone.";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly description: "The id of the milestone.";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly employeeGoalId: {
                                            readonly type: "integer";
                                            readonly description: "The id of the goal which encompasses this milestone.";
                                            readonly examples: readonly ["12"];
                                        };
                                        readonly title: {
                                            readonly type: "string";
                                            readonly description: "The title of the milestone.";
                                            readonly examples: readonly ["Sell 15 Doohickeys"];
                                        };
                                        readonly currentValue: {
                                            readonly type: "number";
                                            readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["7"];
                                        };
                                        readonly startValue: {
                                            readonly type: "number";
                                            readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["0"];
                                        };
                                        readonly endValue: {
                                            readonly type: "number";
                                            readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["15"];
                                        };
                                        readonly completedDateTime: {
                                            readonly type: "string";
                                            readonly format: "Date-Time";
                                            readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                            readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                        };
                                        readonly lastUpdateDateDateTime: {
                                            readonly type: "string";
                                            readonly format: "Date-Time";
                                            readonly description: "The date and time in which the goal was last updated.";
                                            readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                        };
                                        readonly lastUpdateUserId: {
                                            readonly type: "integer";
                                            readonly description: "The ID of the user who last updated this milestone.";
                                            readonly examples: readonly ["24"];
                                        };
                                    };
                                };
                            };
                            readonly actions: {
                                readonly type: "object";
                                readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                                readonly properties: {
                                    readonly canEditGoalProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "Can the user edit the progress bar of this goal.";
                                        readonly examples: readonly ["false"];
                                    };
                                    readonly canEditGoalMilestoneProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "can the user edit the progress of a milestone in this goal.";
                                        readonly examples: readonly ["true"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsAggregateV1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID used to generate the aggregate information.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly canAlign: {
                    readonly description: "The selected user can align goals with other users.";
                    readonly type: "boolean";
                    readonly examples: readonly ["false"];
                };
                readonly canCreateGoals: {
                    readonly description: "The selected user can create a goal.";
                    readonly type: "boolean";
                    readonly examples: readonly ["true"];
                };
                readonly filters: {
                    readonly type: "array";
                    readonly description: "All the goals of the user seperated by filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Id of the filter.";
                                readonly examples: readonly ["status-inProgress"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the filter.";
                                readonly examples: readonly ["In Progress"];
                            };
                            readonly count: {
                                readonly type: "integer";
                                readonly description: "Count of the goals with that filter.";
                                readonly examples: readonly ["3"];
                            };
                        };
                    };
                };
                readonly selectedFilter: {
                    readonly type: "string";
                    readonly description: "The id of the current selected filter.";
                    readonly examples: readonly ["status-inProgress"];
                };
                readonly goals: {
                    readonly type: "array";
                    readonly description: "All goals in selected filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "The id of the goal.";
                                readonly examples: readonly ["4"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the goal.";
                                readonly examples: readonly ["Complete Documentation Epic"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "A description of the goal.";
                                readonly examples: readonly ["Document every endpoint for the goals API."];
                            };
                            readonly percentComplete: {
                                readonly type: "integer";
                                readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                                readonly examples: readonly ["100"];
                            };
                            readonly alignsWithOptionId: {
                                readonly type: "integer";
                            };
                            readonly sharedWithEmployeeIds: {
                                readonly type: "array";
                                readonly description: "Ids of the employees that have access to this goal.";
                                readonly items: {
                                    readonly type: "integer";
                                    readonly examples: readonly ["89"];
                                };
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The due date of the goal.";
                                readonly examples: readonly ["2021-12-17"];
                            };
                            readonly completionDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date the goal was completed.";
                                readonly examples: readonly ["2021-12-16"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the goal.";
                                readonly examples: readonly ["in_progress"];
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly description: "A list of people with access to the goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly employeeId: {
                                readonly type: "integer";
                                readonly description: "The id of this employee.";
                                readonly examples: readonly ["4353"];
                            };
                            readonly userId: {
                                readonly type: "integer";
                                readonly description: "The user id of the person if applicable.";
                                readonly examples: readonly ["45"];
                            };
                            readonly displayFirstName: {
                                readonly type: "string";
                                readonly description: "First name of the person.";
                                readonly examples: readonly ["Tim"];
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "Last name of the person.";
                                readonly examples: readonly ["Johnson"];
                            };
                            readonly photoUrl: {
                                readonly type: "string";
                                readonly description: "url of the user profile image.";
                                readonly examples: readonly ["https://tim.johnson.jpg"];
                            };
                        };
                    };
                };
                readonly comments: {
                    readonly type: "array";
                    readonly description: "A list of how many comments belong to each goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly goalId: {
                                readonly type: "integer";
                                readonly description: "The goalId that the comments are linked to.";
                                readonly examples: readonly ["25"];
                            };
                            readonly commentCount: {
                                readonly type: "integer";
                                readonly description: "How many comments are linked to the goal";
                                readonly examples: readonly ["2"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsAggregateV11: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID used to generate the aggregate information.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly canAlign: {
                    readonly description: "The selected user can align goals with other users.";
                    readonly type: "boolean";
                    readonly examples: readonly ["false"];
                };
                readonly canCreateGoals: {
                    readonly description: "The selected user can create a goal.";
                    readonly type: "boolean";
                    readonly examples: readonly ["true"];
                };
                readonly filters: {
                    readonly type: "array";
                    readonly description: "All the goals of the user seperated by filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Id of the filter.";
                                readonly examples: readonly ["status-inProgress"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the filter.";
                                readonly examples: readonly ["In Progress"];
                            };
                            readonly count: {
                                readonly type: "integer";
                                readonly description: "Count of the goals with that filter.";
                                readonly examples: readonly ["3"];
                            };
                            readonly actions: {
                                readonly type: "object";
                                readonly description: "What actions a user can preform on this kind of goal.";
                                readonly properties: {
                                    readonly canCloseGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be closed in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoalProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal progress bar be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canReopenGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be reopened in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canShareGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be shared in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly selectedFilter: {
                    readonly type: "string";
                    readonly description: "The id of the current selected filter.";
                    readonly examples: readonly ["status-inProgress"];
                };
                readonly goals: {
                    readonly type: "array";
                    readonly description: "All goals in selected filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "The id of the goal.";
                                readonly examples: readonly ["4"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the goal.";
                                readonly examples: readonly ["Complete Documentation Epic"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "A description of the goal.";
                                readonly examples: readonly ["Document every endpoint for the goals API."];
                            };
                            readonly percentComplete: {
                                readonly type: "integer";
                                readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                                readonly examples: readonly ["100"];
                            };
                            readonly alignsWithOptionId: {
                                readonly type: "integer";
                            };
                            readonly sharedWithEmployeeIds: {
                                readonly type: "array";
                                readonly description: "Ids of the employees that have access to this goal.";
                                readonly items: {
                                    readonly type: "integer";
                                    readonly examples: readonly ["89"];
                                };
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The due date of the goal.";
                                readonly examples: readonly ["2021-12-17"];
                            };
                            readonly completionDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date the goal was completed.";
                                readonly examples: readonly ["2021-12-16"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the goal.";
                                readonly examples: readonly ["in_progress"];
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly description: "A list of people with access to the goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly employeeId: {
                                readonly type: "integer";
                                readonly description: "The id of this employee.";
                                readonly examples: readonly ["4353"];
                            };
                            readonly userId: {
                                readonly type: "integer";
                                readonly description: "The user id of the person if applicable.";
                                readonly examples: readonly ["45"];
                            };
                            readonly displayFirstName: {
                                readonly type: "string";
                                readonly description: "First name of the person.";
                                readonly examples: readonly ["Tim"];
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "Last name of the person.";
                                readonly examples: readonly ["Johnson"];
                            };
                            readonly photoUrl: {
                                readonly type: "string";
                                readonly description: "url of the user profile image.";
                                readonly examples: readonly ["https://tim.johnson.jpg"];
                            };
                        };
                    };
                };
                readonly comments: {
                    readonly type: "array";
                    readonly description: "A list of how many comments belong to each goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly goalId: {
                                readonly type: "integer";
                                readonly description: "The goalId that the comments are linked to.";
                                readonly examples: readonly ["25"];
                            };
                            readonly commentCount: {
                                readonly type: "integer";
                                readonly description: "How many comments are linked to the goal";
                                readonly examples: readonly ["2"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsAggregateV12: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID used to generate the aggregate information.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly canAlign: {
                    readonly description: "The selected user can align goals with other users.";
                    readonly type: "boolean";
                    readonly examples: readonly ["false"];
                };
                readonly canCreateGoals: {
                    readonly description: "The selected user can create a goal.";
                    readonly type: "boolean";
                    readonly examples: readonly ["true"];
                };
                readonly filters: {
                    readonly type: "array";
                    readonly description: "All the goals of the user seperated by filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Id of the filter.";
                                readonly examples: readonly ["status-inProgress"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the filter.";
                                readonly examples: readonly ["In Progress"];
                            };
                            readonly count: {
                                readonly type: "integer";
                                readonly description: "Count of the goals with that filter.";
                                readonly examples: readonly ["3"];
                            };
                            readonly actions: {
                                readonly type: "object";
                                readonly description: "What actions a user can preform on this kind of goal.";
                                readonly properties: {
                                    readonly canCloseGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be closed in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoalProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal progress bar be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canReopenGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be reopened in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canShareGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be shared in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly selectedFilter: {
                    readonly type: "string";
                    readonly description: "The id of the current selected filter.";
                    readonly examples: readonly ["status-inProgress"];
                };
                readonly goals: {
                    readonly type: "array";
                    readonly description: "All goals in selected filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "The id of the goal.";
                                readonly examples: readonly ["4"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the goal.";
                                readonly examples: readonly ["Complete Documentation Epic"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "A description of the goal.";
                                readonly examples: readonly ["Document every endpoint for the goals API."];
                            };
                            readonly percentComplete: {
                                readonly type: "integer";
                                readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                                readonly examples: readonly ["100"];
                            };
                            readonly alignsWithOptionId: {
                                readonly type: "integer";
                            };
                            readonly sharedWithEmployeeIds: {
                                readonly type: "array";
                                readonly description: "Ids of the employees that have access to this goal.";
                                readonly items: {
                                    readonly type: "integer";
                                    readonly examples: readonly ["89"];
                                };
                            };
                            readonly dueDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The due date of the goal.";
                                readonly examples: readonly ["2021-12-17"];
                            };
                            readonly completionDate: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The date the goal was completed.";
                                readonly examples: readonly ["2021-12-16"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the goal.";
                                readonly examples: readonly ["in_progress"];
                            };
                            readonly milestones: {
                                readonly type: "array";
                                readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "An individual milestone.";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly description: "The id of the milestone.";
                                            readonly examples: readonly ["2"];
                                        };
                                        readonly employeeGoalId: {
                                            readonly type: "integer";
                                            readonly description: "The id of the goal which encompasses this milestone.";
                                            readonly examples: readonly ["12"];
                                        };
                                        readonly title: {
                                            readonly type: "string";
                                            readonly description: "The title of the milestone.";
                                            readonly examples: readonly ["Sell 15 Doohickeys"];
                                        };
                                        readonly currentValue: {
                                            readonly type: "number";
                                            readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["7"];
                                        };
                                        readonly startValue: {
                                            readonly type: "number";
                                            readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["0"];
                                        };
                                        readonly endValue: {
                                            readonly type: "number";
                                            readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                            readonly examples: readonly ["15"];
                                        };
                                        readonly completedDateTime: {
                                            readonly type: "string";
                                            readonly format: "Date-Time";
                                            readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                            readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                        };
                                        readonly lastUpdateDateDateTime: {
                                            readonly type: "string";
                                            readonly format: "Date-Time";
                                            readonly description: "The date and time in which the goal was last updated.";
                                            readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                        };
                                        readonly lastUpdateUserId: {
                                            readonly type: "integer";
                                            readonly description: "The ID of the user who last updated this milestone.";
                                            readonly examples: readonly ["24"];
                                        };
                                    };
                                };
                            };
                            readonly actions: {
                                readonly type: "object";
                                readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                                readonly properties: {
                                    readonly canEditGoalProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "Can the user edit the progress bar of this goal.";
                                        readonly examples: readonly ["false"];
                                    };
                                    readonly canEditGoalMilestoneProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "can the user edit the progress of a milestone in this goal.";
                                        readonly examples: readonly ["true"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly persons: {
                    readonly type: "array";
                    readonly description: "A list of people with access to the goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly employeeId: {
                                readonly type: "integer";
                                readonly description: "The id of this employee.";
                                readonly examples: readonly ["4353"];
                            };
                            readonly userId: {
                                readonly type: "integer";
                                readonly description: "The user id of the person if applicable.";
                                readonly examples: readonly ["45"];
                            };
                            readonly displayFirstName: {
                                readonly type: "string";
                                readonly description: "First name of the person.";
                                readonly examples: readonly ["Tim"];
                            };
                            readonly lastName: {
                                readonly type: "string";
                                readonly description: "Last name of the person.";
                                readonly examples: readonly ["Johnson"];
                            };
                            readonly photoUrl: {
                                readonly type: "string";
                                readonly description: "url of the user profile image.";
                                readonly examples: readonly ["https://tim.johnson.jpg"];
                            };
                        };
                    };
                };
                readonly comments: {
                    readonly type: "array";
                    readonly description: "A list of how many comments belong to each goal.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly goalId: {
                                readonly type: "integer";
                                readonly description: "The goalId that the comments are linked to.";
                                readonly examples: readonly ["25"];
                            };
                            readonly commentCount: {
                                readonly type: "integer";
                                readonly description: "How many comments are linked to the goal";
                                readonly examples: readonly ["2"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsAlignmentOptions: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID to get alignable goal options for.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const GetGoalsFiltersV1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID to whom the goals are assigned.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly filters: {
                    readonly type: "array";
                    readonly description: "All the goals of the user seperated by filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Id of the filter.";
                                readonly examples: readonly ["status-inProgress"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the filter.";
                                readonly examples: readonly ["In Progress"];
                            };
                            readonly count: {
                                readonly type: "integer";
                                readonly description: "Count of the goals with that filter.";
                                readonly examples: readonly ["3"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsFiltersV11: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID to whom the goals are assigned.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly filters: {
                    readonly type: "array";
                    readonly description: "All the goals of the user seperated by filter.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Id of the filter.";
                                readonly examples: readonly ["status-inProgress"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the filter.";
                                readonly examples: readonly ["In Progress"];
                            };
                            readonly count: {
                                readonly type: "integer";
                                readonly description: "Count of the goals with that filter.";
                                readonly examples: readonly ["3"];
                            };
                            readonly actions: {
                                readonly type: "object";
                                readonly description: "What actions a user can preform on this kind of goal.";
                                readonly properties: {
                                    readonly canCloseGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be closed in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canEditGoalProgressBar: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal progress bar be edited in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canReopenGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be reopened in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                    readonly canShareGoal: {
                                        readonly type: "boolean";
                                        readonly description: "Can a goal be shared in this state.";
                                        readonly examples: readonly ["true"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGoalsShareOptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID to get sharing options for.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The search term used to filter employees returned. Will search name, employee ID and email.";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit will restrict results to specified number.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetHiringLeads: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly hiringLead: {
                        readonly type: "object";
                        readonly properties: {
                            readonly employeeId: {
                                readonly description: "The employeeId of the potential hiring lead";
                                readonly type: "integer";
                            };
                            readonly preferredFullName: {
                                readonly description: "The preferred full name of the potential hiring lead";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetHourRecord: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the time tracking ID used to originally create the record.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const GetJobSummaries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly statusGroups: {
                    readonly type: "string";
                    readonly enum: readonly ["ALL", "DRAFT_AND_OPEN", "Open", "Filled", "Draft", "Deleted", "On Hold", "Canceled"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A list of status groups to filter positions by.";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly enum: readonly ["count", "title", "lead", "created", "status"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A specific field to sort the results by.";
                };
                readonly sortOrder: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order by which to sort results.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMonitorFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly fields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly alias: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPayrollDeductionsForEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPlanDeductionsByEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetStatuses: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTimeOffPolicies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimeOffTypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly mode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "set to 'request' to get a list of all time off types with which this user can create a time off request. The default is to return the list of time off types the user has permissions on. This distinction is important, as employees can request time off for types that they don't have permission to view balances and requests for.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimesheetEntries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "YYYY-MM-DD. Only show timesheet entries on/after the specified start date. Must be within the last 365 days.";
                };
                readonly end: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "YYYY-MM-DD. Only show timesheet entries on/before the specified end date. Must be within the last 365 days.";
                };
                readonly employeeIds: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma separated list of employee IDs. When specified, only entries that match these employee IDs are returned.";
                };
            };
            readonly required: readonly ["start", "end"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly title: "Timesheet Entry";
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly description: "ID of the entry.";
                        readonly type: "integer";
                    };
                    readonly employeeId: {
                        readonly description: "ID of the employee associated with the entry.";
                        readonly type: "integer";
                    };
                    readonly type: {
                        readonly description: "type of the entry.\n\n`hour` `clock`";
                        readonly enum: readonly ["hour", "clock"];
                        readonly type: "string";
                    };
                    readonly start: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly end: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly timezone: {
                        readonly description: "The timezone the clock entry was recorded in. Property can be null.";
                        readonly type: "string";
                    };
                    readonly hours: {
                        readonly description: "The number of hours for the entry. This value has a maximum scale of 4. Property can be null.";
                        readonly type: "number";
                    };
                    readonly note: {
                        readonly description: "The note associated with the entry. Property can be null.";
                        readonly type: "string";
                    };
                    readonly projectInfo: {
                        readonly title: "Time Tracking Project Info";
                        readonly type: "object";
                        readonly properties: {
                            readonly project: {
                                readonly title: "Time Tracking Project";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the project.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the project.";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly task: {
                                readonly title: "Time Tracking Task";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the task.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the task.";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                    readonly approved: {
                        readonly description: "Approval status of the timesheet for the entry.";
                        readonly type: "boolean";
                    };
                    readonly approvedAt: {
                        readonly description: "Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.";
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTimesheets: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["timesheets"];
        readonly properties: {
            readonly timesheets: {
                readonly type: "string";
                readonly description: "Comma separated list of timesheet ids";
                readonly examples: readonly ["10, 11, 12"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const GetWebhook: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The webhook ID to display details about.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Add Webhook Response";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The id of the webhook.";
                    readonly type: "integer";
                    readonly examples: readonly ["4"];
                };
                readonly name: {
                    readonly description: "The name of the webhook.";
                    readonly type: "string";
                    readonly maxLength: 1024;
                    readonly examples: readonly ["Example Webhook"];
                };
                readonly created: {
                    readonly description: "timestamp of creation";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly lastSent: {
                    readonly description: "timestamp of last webhook sent";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly monitorFields: {
                    readonly description: "A list of fields to monitor.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["firstName", "lastName"];
                };
                readonly postFields: {
                    readonly description: "A list of fields to post to the webhook url. Field ID or alias: external name";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly description: "External name to post field to";
                        readonly type: "string";
                    };
                };
                readonly url: {
                    readonly description: "The url the webhook should send data to.";
                    readonly type: "string";
                    readonly examples: readonly ["https://www.example.com"];
                };
                readonly format: {
                    readonly description: "The format the webhook should use (json, form-encoded).";
                    readonly type: "string";
                    readonly examples: readonly ["json"];
                };
                readonly frequency: {
                    readonly description: "How often the webhook could fire.";
                    readonly type: "object";
                    readonly properties: {
                        readonly hour: {
                            readonly description: "The hour to potentially fire.";
                            readonly type: "integer";
                            readonly examples: readonly [12];
                        };
                        readonly minute: {
                            readonly description: "The minute to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [56];
                        };
                        readonly day: {
                            readonly description: "The day to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [24];
                        };
                        readonly month: {
                            readonly description: "The month to potentially fire";
                        };
                    };
                };
                readonly limit: {
                    readonly description: "To limit how often to potentially fire a webhook, and maximum amount of records to send";
                    readonly type: "object";
                    readonly properties: {
                        readonly times: {
                            readonly description: "The amount of records to send";
                            readonly type: "integer";
                            readonly examples: readonly [15];
                        };
                        readonly seconds: {
                            readonly description: "The minimum amount of seconds between requests";
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                    };
                };
                readonly includeCompanyDomain: {
                    readonly description: "If set to true, the company domain will be added to the header.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly title: "Webhook 403 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["You do not have access to webhook ID: 5"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly title: "Webhook 404 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["No webhook was found with ID: 7."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWebhookList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly webhooks: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the webhook.";
                                readonly examples: readonly ["1"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the webhook.";
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "The creation date of the webhook.";
                                readonly examples: readonly ["2021-09-20 22:58:01"];
                            };
                            readonly lastSent: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "The date the webhook was last sent.";
                                readonly examples: readonly ["2021-09-21 12:00:00"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "The url of the webhook.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWebhookLogs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The webhook ID to get logs about.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Webhook Log Response";
            readonly type: "object";
            readonly properties: {
                readonly webhookId: {
                    readonly description: "The id of the webhook.";
                    readonly type: "integer";
                    readonly examples: readonly ["5"];
                };
                readonly url: {
                    readonly description: "The URL of the webhook.";
                    readonly type: "string";
                    readonly examples: readonly ["https://exmaple.com"];
                };
                readonly lastAttempted: {
                    readonly description: "timestamp of last time the webhook was sent";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly lastSuccess: {
                    readonly description: "timestamp of last time the webhook was sent successfully";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly failureCount: {
                    readonly description: "Count of how many times this call failed since last success";
                    readonly type: "integer";
                    readonly examples: readonly [0];
                };
                readonly status: {
                    readonly description: "Status code of last request";
                    readonly type: "integer";
                    readonly examples: readonly [200];
                };
                readonly employeeIds: {
                    readonly description: "A list of employee ids that were changed.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "integer";
                    };
                    readonly examples: readonly [1, 2];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly title: "Webhook 403 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["You do not have access to webhook ID: 5"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly title: "Webhook 404 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["No webhook was found with ID: 7."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const IsEmployeeClockedIn: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of employee to whom the clock entry belongs.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const ListCompanyFiles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const ListEmployeeFiles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const ListEmployeeTrainings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the employee to get a list of trainings for.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly trainingTypeId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The training type id is optional. Not supplying a training type id will return the collection of all training records for the employee.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly trainingId: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "The ID of the training record.";
                                readonly type: "integer";
                            };
                            readonly employeeId: {
                                readonly description: "The ID of the employee associated with the training.";
                                readonly type: "integer";
                            };
                            readonly completed: {
                                readonly description: "Completed is a date in the format yyyy-mm-dd.";
                                readonly type: "string";
                            };
                            readonly notes: {
                                readonly description: "Notes left on the training record.";
                                readonly type: "string";
                            };
                            readonly instructor: {
                                readonly description: "Name of the instructor.";
                                readonly type: "string";
                            };
                            readonly credits: {
                                readonly description: "What was credited for the training record.";
                                readonly type: "number";
                            };
                            readonly hours: {
                                readonly description: "Hours associated with the training record.";
                                readonly type: "number";
                            };
                            readonly cost: {
                                readonly description: "The currency and cost for the training record.";
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly description: "The training type ID.";
                                readonly type: "integer";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListTrainingCategories: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly categoryId: {
                        readonly description: "The category ID and name";
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListTrainingTypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly trainingId: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "The ID of the training";
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly description: "Name of the training type.";
                                readonly type: "string";
                            };
                            readonly renewable: {
                                readonly description: "If true, training will be renewed based off of frequency.";
                                readonly type: "boolean";
                            };
                            readonly frequency: {
                                readonly description: "The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.";
                                readonly type: "integer";
                            };
                            readonly dueFromHireDate: {
                                readonly description: "Number of days before the training is due for new hires. Not valid if training is not required.";
                                readonly type: "integer";
                            };
                            readonly required: {
                                readonly description: "Is this a required training?";
                                readonly type: "integer";
                            };
                            readonly category: {
                                readonly description: "The category ID and name";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly linkUrl: {
                                readonly description: "Optional URL that can be included with a training.";
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly description: "Description for the training.";
                                readonly type: "string";
                            };
                            readonly allowEmployeesToMarkComplete: {
                                readonly description: "Allows all employees who can view the training to be able to mark it complete.";
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Login: {
    readonly formData: {
        readonly title: "Login";
        readonly type: "object";
        readonly properties: {
            readonly applicationKey: {
                readonly description: "";
                readonly type: "string";
            };
            readonly user: {
                readonly description: "";
                readonly type: "string";
            };
            readonly password: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const MetadataAddOrUpdateValuesForListFields: {
    readonly body: {
        readonly title: "Add or Update Values for List Fields";
        readonly type: "object";
        readonly properties: {
            readonly options: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "";
                            readonly type: "integer";
                        };
                        readonly value: {
                            readonly description: "";
                            readonly type: "string";
                            readonly maximum: 255;
                        };
                        readonly archived: {
                            readonly description: "";
                            readonly type: "string";
                            readonly maximum: 255;
                        };
                        readonly adpCode: {
                            readonly description: "";
                            readonly type: "string";
                            readonly maximum: 255;
                        };
                    };
                };
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly listFieldId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "listFieldId"];
        }];
    };
};
declare const MetadataGetAListOfFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const MetadataGetAListOfTabularFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const MetadataGetDetailsForListFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApplicantStatus: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["status"];
        readonly properties: {
            readonly status: {
                readonly description: "Associates a status id with an application.";
                readonly type: "integer";
                readonly examples: readonly ["2"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly applicationId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the application to add a comment to.";
                };
            };
            readonly required: readonly ["companyDomain", "applicationId"];
        }];
    };
};
declare const PostApplicationComment: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["type", "comment"];
        readonly properties: {
            readonly type: {
                readonly description: "Always the value \"comment\".";
                readonly type: "string";
                readonly default: "comment";
                readonly pattern: "^comment$";
                readonly examples: readonly ["comment"];
            };
            readonly comment: {
                readonly description: "The comment being posted.";
                readonly type: "string";
                readonly examples: readonly ["I really like this applicant"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly applicationId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the application to add a comment to.";
                };
            };
            readonly required: readonly ["companyDomain", "applicationId"];
        }];
    };
};
declare const PostCloseGoal: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "An individual goal";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostEmployeeBenefit: {
    readonly body: {
        readonly title: "Employee Benefit";
        readonly type: "object";
        readonly required: readonly ["employeeId", "companyBenefitId", "enrollmentStatus", "effectiveDate", "companyBenefitName", "startDate", "benefitType"];
        readonly properties: {
            readonly employeeId: {
                readonly description: "Employee ID";
                readonly type: "integer";
            };
            readonly companyBenefitId: {
                readonly description: "Company benefit ID";
                readonly type: "integer";
            };
            readonly companyBenefitName: {
                readonly description: "Company benefit name";
                readonly type: "string";
            };
            readonly coverageLevel: {
                readonly description: "Coverage level";
                readonly type: "string";
            };
            readonly deductionEndDate: {
                readonly description: "Deduction end date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly deductionStartDate: {
                readonly description: "Deduction start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly enrollmentStatus: {
                readonly description: "Enrollment status";
                readonly type: "string";
                readonly enum: readonly ["Eligible", "Enrolled", "Waived", "Withdrawn", "Terminated", "Ineligible"];
            };
            readonly effectiveDate: {
                readonly description: "Enrollment status effective date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly currencyCode: {
                readonly description: "Currency code";
                readonly type: "string";
            };
            readonly employeeAmount: {
                readonly description: "Employee amount";
                readonly type: "number";
            };
            readonly employeeAmountType: {
                readonly description: "Employee amount type";
                readonly type: "string";
            };
            readonly employeePercentBasedOn: {
                readonly description: "Employee percent based on";
                readonly type: "string";
            };
            readonly employeeCapAmount: {
                readonly description: "Employee cap amount";
                readonly type: "number";
            };
            readonly employeeCapAmountType: {
                readonly description: "Employee cap amount type";
                readonly type: "string";
            };
            readonly employeeAnnualMax: {
                readonly description: "Employee annual max";
                readonly type: "number";
            };
            readonly companyAmount: {
                readonly description: "Company amount";
                readonly type: "number";
            };
            readonly companyAmountType: {
                readonly description: "Company amount type";
                readonly type: "string";
            };
            readonly companyPercentBasedOn: {
                readonly description: "Company percent based on";
                readonly type: "string";
            };
            readonly companyCapAmount: {
                readonly description: "Company cap amount";
                readonly type: "number";
            };
            readonly companyCapAmountType: {
                readonly description: "Company cap amount type";
                readonly type: "string";
            };
            readonly companyAnnualMax: {
                readonly description: "Company annual max";
                readonly type: "number";
            };
            readonly benefitPlanCoverageId: {
                readonly description: "Benefit Plan Coverage ID";
                readonly type: "number";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostGoal: {
    readonly body: {
        readonly title: "Add Employee Goal";
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly description: "[Required] The goal title.";
                readonly type: "string";
                readonly maxLength: 1024;
            };
            readonly description: {
                readonly description: "[Optional] The goal description.";
                readonly type: "string";
                readonly maxLength: 65535;
            };
            readonly percentComplete: {
                readonly description: "[Optional] The goal completion percentage (0 - 100). If completionDate is set, this value must be 100.";
                readonly type: "integer";
            };
            readonly alignsWithOptionId: {
                readonly description: "[Optional] The option ID that aligns with this goal.";
                readonly type: "string";
            };
            readonly sharedWithEmployeeIds: {
                readonly description: "[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered \"shared with\". This must include the employee for whom the goal is created.";
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
                readonly maximum: 50;
            };
            readonly dueDate: {
                readonly description: "[Required] The goal due date in YYYY-mm-dd format.";
                readonly type: "string";
            };
            readonly completionDate: {
                readonly description: "[Optional] The date the goal was completed. If date is set, and no milestones are contained within this goal, percentComplete must be set to 100. If this goal does contain milestones, completion date cannot be set.";
                readonly type: "number";
                readonly format: "float";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
            readonly milestones: {
                readonly description: "[Optional] Milestones for the goal.";
                readonly type: "array";
                readonly items: {
                    readonly title: "Goal Milestone";
                    readonly type: "object";
                    readonly properties: {
                        readonly title: {
                            readonly description: "[Required] The title of the milestone.";
                            readonly type: "string";
                        };
                        readonly startValue: {
                            readonly description: "[Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.";
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly endValue: {
                            readonly description: "[Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.";
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["title"];
                };
            };
        };
        readonly required: readonly ["title", "dueDate", "sharedWithEmployeeIds"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "An individual goal";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostGoalComment: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
};
declare const PostReopenGoal: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "An individual goal";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostWebhook: {
    readonly body: {
        readonly title: "Add Webhook";
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "The name of the webhook.";
                readonly type: "string";
                readonly maxLength: 1024;
                readonly examples: readonly ["My new webhook"];
            };
            readonly monitorFields: {
                readonly description: "A list of fields to monitor.";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly examples: readonly ["firstName", "lastName"];
            };
            readonly postFields: {
                readonly description: "A list of fields to post to the webhook url. Field ID or alias: external name";
                readonly type: "object";
                readonly additionalProperties: {
                    readonly description: "External name to post field to";
                    readonly type: "string";
                };
            };
            readonly url: {
                readonly description: "The url the webhook should send data to (must begin with https://).";
                readonly pattern: "^http://";
                readonly type: "string";
            };
            readonly format: {
                readonly description: "The format the webhook should use (json - default, form-encoded).";
                readonly enum: readonly ["json", "form-encoded"];
                readonly type: "string";
            };
            readonly frequency: {
                readonly description: "How often the webhook could fire.";
                readonly type: "object";
                readonly properties: {
                    readonly hour: {
                        readonly description: "The hour to potentially fire (0-23, null to potentially fire every hour)";
                        readonly minimum: 0;
                        readonly maximum: 23;
                        readonly type: "integer";
                    };
                    readonly minute: {
                        readonly description: "The minute to potentially fire (0-59, null to potentially fire every minute)";
                        readonly minimum: 0;
                        readonly maximum: 59;
                        readonly type: "integer";
                    };
                    readonly day: {
                        readonly description: "The day to potentially fire (1-31, null to potentially fire every day)";
                        readonly minimum: 1;
                        readonly maximum: 31;
                        readonly type: "integer";
                    };
                    readonly month: {
                        readonly description: "The month to potentially fire (1-12, null to potentially fire every month)";
                        readonly minimum: 1;
                        readonly maximum: 12;
                        readonly type: "integer";
                    };
                };
            };
            readonly limit: {
                readonly description: "To limit how often to potentially fire a webhook, and maximum amount of records to send";
                readonly type: "object";
                readonly properties: {
                    readonly times: {
                        readonly description: "The amount of records to send";
                        readonly type: "integer";
                    };
                    readonly seconds: {
                        readonly description: "The minimum amount of seconds between requests";
                        readonly type: "integer";
                    };
                };
            };
            readonly includeCompanyDomain: {
                readonly description: "If set to true, the company domain will be added to the header.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
        };
        readonly required: readonly ["name", "monitorFields", "postFields", "url"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The id of the webhook.";
                    readonly type: "integer";
                    readonly examples: readonly ["4"];
                };
                readonly name: {
                    readonly description: "The name of the webhook.";
                    readonly type: "string";
                    readonly maxLength: 1024;
                    readonly examples: readonly ["Example Webhook"];
                };
                readonly created: {
                    readonly description: "timestamp of creation";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly lastSent: {
                    readonly description: "timestamp of last webhook sent";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly monitorFields: {
                    readonly description: "A list of fields to monitor.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["firstName", "lastName"];
                };
                readonly postFields: {
                    readonly description: "A list of fields to post to the webhook url. Field ID or alias: external name";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly description: "External name to post field to";
                        readonly type: "string";
                    };
                };
                readonly url: {
                    readonly description: "The url the webhook should send data to.";
                    readonly type: "string";
                    readonly examples: readonly ["https://www.example.com"];
                };
                readonly format: {
                    readonly description: "The format the webhook should use (json, form-encoded).";
                    readonly type: "string";
                    readonly examples: readonly ["json"];
                };
                readonly frequency: {
                    readonly description: "How often the webhook could fire.";
                    readonly type: "object";
                    readonly properties: {
                        readonly hour: {
                            readonly description: "The hour to potentially fire.";
                            readonly type: "integer";
                            readonly examples: readonly [12];
                        };
                        readonly minute: {
                            readonly description: "The minute to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [56];
                        };
                        readonly day: {
                            readonly description: "The day to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [24];
                        };
                        readonly month: {
                            readonly description: "The month to potentially fire";
                        };
                    };
                };
                readonly limit: {
                    readonly description: "To limit how often to potentially fire a webhook, and maximum amount of records to send";
                    readonly type: "object";
                    readonly properties: {
                        readonly times: {
                            readonly description: "The amount of records to send";
                            readonly type: "integer";
                            readonly examples: readonly [15];
                        };
                        readonly seconds: {
                            readonly description: "The minimum amount of seconds between requests";
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                    };
                };
                readonly privateKey: {
                    readonly description: "The private key which can be used to verify that the webhook is secure (uses HMAC-SHA256)";
                    readonly type: "string";
                };
                readonly includeCompanyDomain: {
                    readonly description: "If set to true, the company domain will be added to the header.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly title: "Webhook 403 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Invalid request body"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Permission denied to the following fields"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutGoalComment: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
                readonly commentId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "commentId is the comment ID for the specified goal.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId", "commentId"];
        }];
    };
};
declare const PutGoalProgress: {
    readonly body: {
        readonly type: "integer";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "The selected goal object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutGoalSharedWith: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sharedWithEmployeeIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "The selected goal object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutGoalV1: {
    readonly body: {
        readonly title: "Employee Goal";
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly description: "A unique identifier for the record. Use this ID to reference this goal.";
                readonly type: "integer";
            };
            readonly title: {
                readonly description: "The goal title.";
                readonly type: "string";
                readonly maxLength: 1024;
            };
            readonly description: {
                readonly description: "The goal description.";
                readonly type: "string";
                readonly maxLength: 65535;
            };
            readonly percentComplete: {
                readonly description: "The goal completion percentage (0 - 100).";
                readonly type: "integer";
            };
            readonly alignsWithOptionId: {
                readonly description: "The option ID that aligns with this goal.";
                readonly type: "string";
            };
            readonly sharedWithEmployeeIds: {
                readonly description: "Employee IDs of employees with whom the goal is shared. All goal owners are considered \"shared with\".";
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
                readonly maximum: 50;
            };
            readonly dueDate: {
                readonly description: "The goal due date in YYYY-mm-dd format.";
                readonly type: "string";
            };
            readonly completionDate: {
                readonly description: "The date the goal was completed.";
                readonly type: "number";
                readonly format: "float";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
        };
        readonly required: readonly ["id", "title"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "An individual goal";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutGoalV11: {
    readonly body: {
        readonly title: "Update Employee Goal With Milestones";
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly description: "[Required] The goal title.";
                readonly type: "string";
                readonly maxLength: 1024;
            };
            readonly description: {
                readonly description: "[Optional] The goal description.";
                readonly type: "string";
                readonly maxLength: 65535;
            };
            readonly alignsWithOptionId: {
                readonly description: "[Optional] The option ID that aligns with this goal.";
                readonly type: "string";
            };
            readonly sharedWithEmployeeIds: {
                readonly description: "[Required] Employee IDs of employees with whom the goal is shared. All goal owners are considered \"shared with\". This must include the employee for whom the goal is created.";
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
                readonly maximum: 50;
            };
            readonly dueDate: {
                readonly description: "[Required] The goal due date in YYYY-mm-dd format.";
                readonly type: "string";
            };
            readonly milestonesEnabled: {
                readonly description: "[Optional] A flag indicating whether or not milestones are enabled for this goal. Setting this flag to false will delete all existing milestones for this goal.";
                readonly type: "boolean";
            };
            readonly deletedMilestoneIds: {
                readonly description: "[Optional] Ids of all the milestones to be deleted with the update.";
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
            readonly milestones: {
                readonly description: "[Optional] All milestones to be added to the goal with this update.";
                readonly type: "array";
                readonly items: {
                    readonly title: "Goal Milestone";
                    readonly type: "object";
                    readonly properties: {
                        readonly title: {
                            readonly description: "[Required] The title of the milestone.";
                            readonly type: "string";
                        };
                        readonly startValue: {
                            readonly description: "[Optional] Initial value of the milestone. Rounded to the nearest hundredth. If this value is set, endValue must also be set.";
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly endValue: {
                            readonly description: "[Optional] End goal value for the milestone. Rounded to the nearest hundredth. If this value is set, startValue must also be set.";
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["title"];
                };
            };
        };
        readonly required: readonly ["title", "dueDate", "sharedWithEmployeeIds"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "employeeId is the employee ID with whom the goal is associated.";
                };
                readonly goalId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "goalId is the goal ID for the specified employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "goalId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly goal: {
                    readonly type: "object";
                    readonly description: "An individual goal";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The id of the goal.";
                            readonly examples: readonly ["4"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly description: "Title of the goal.";
                            readonly examples: readonly ["Complete Documentation Epic"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "A description of the goal.";
                            readonly examples: readonly ["Document every endpoint for the goals API."];
                        };
                        readonly percentComplete: {
                            readonly type: "integer";
                            readonly description: "A percentage (1-100) that denotes how complete the goal is.";
                            readonly examples: readonly ["100"];
                        };
                        readonly alignsWithOptionId: {
                            readonly type: "integer";
                        };
                        readonly sharedWithEmployeeIds: {
                            readonly type: "array";
                            readonly description: "Ids of the employees that have access to this goal.";
                            readonly items: {
                                readonly type: "integer";
                                readonly examples: readonly ["89"];
                            };
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The due date of the goal.";
                            readonly examples: readonly ["2021-12-17"];
                        };
                        readonly completionDate: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The date the goal was completed.";
                            readonly examples: readonly ["2021-12-16"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the goal.";
                            readonly examples: readonly ["in_progress"];
                        };
                        readonly milestones: {
                            readonly type: "array";
                            readonly description: "All milestones for the individual goal. This array will not exist if milestones are not selected for this goal.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual milestone.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "The id of the milestone.";
                                        readonly examples: readonly ["2"];
                                    };
                                    readonly employeeGoalId: {
                                        readonly type: "integer";
                                        readonly description: "The id of the goal which encompasses this milestone.";
                                        readonly examples: readonly ["12"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The title of the milestone.";
                                        readonly examples: readonly ["Sell 15 Doohickeys"];
                                    };
                                    readonly currentValue: {
                                        readonly type: "number";
                                        readonly description: "The current value for a numeric milestone. This number will be rounded to the nearest hundreds. On the creation of a numeric milestone this value will automatically be set to the start value of the milestone. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["7"];
                                    };
                                    readonly startValue: {
                                        readonly type: "number";
                                        readonly description: "The starting value for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["0"];
                                    };
                                    readonly endValue: {
                                        readonly type: "number";
                                        readonly description: "The end goal for a numeric milestone. This number will be rounded to the nearest hundreds. If the milestone is a simple checkbox milestone, this value will always be null.";
                                        readonly examples: readonly ["15"];
                                    };
                                    readonly completedDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal has been completed. If the goal is not completed the value will be null.";
                                        readonly examples: readonly ["2024-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateDateDateTime: {
                                        readonly type: "string";
                                        readonly format: "Date-Time";
                                        readonly description: "The date and time in which the goal was last updated.";
                                        readonly examples: readonly ["2023-07-12T14:50:46Z"];
                                    };
                                    readonly lastUpdateUserId: {
                                        readonly type: "integer";
                                        readonly description: "The ID of the user who last updated this milestone.";
                                        readonly examples: readonly ["24"];
                                    };
                                };
                            };
                        };
                        readonly actions: {
                            readonly type: "object";
                            readonly description: "Actions that are available to a goal with milestones enabled. This object will not appear on a goal without milestones.";
                            readonly properties: {
                                readonly canEditGoalProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "Can the user edit the progress bar of this goal.";
                                    readonly examples: readonly ["false"];
                                };
                                readonly canEditGoalMilestoneProgressBar: {
                                    readonly type: "boolean";
                                    readonly description: "can the user edit the progress of a milestone in this goal.";
                                    readonly examples: readonly ["true"];
                                };
                            };
                        };
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutWebhook: {
    readonly body: {
        readonly title: "Add Webhook";
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "The name of the webhook.";
                readonly type: "string";
                readonly maxLength: 1024;
                readonly examples: readonly ["My new webhook"];
            };
            readonly monitorFields: {
                readonly description: "A list of fields to monitor.";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly examples: readonly ["firstName", "lastName"];
            };
            readonly postFields: {
                readonly description: "A list of fields to post to the webhook url. Field ID or alias: external name";
                readonly type: "object";
                readonly additionalProperties: {
                    readonly description: "External name to post field to";
                    readonly type: "string";
                };
            };
            readonly url: {
                readonly description: "The url the webhook should send data to (must begin with https://).";
                readonly pattern: "^http://";
                readonly type: "string";
            };
            readonly format: {
                readonly description: "The format the webhook should use (json - default, form-encoded).";
                readonly enum: readonly ["json", "form-encoded"];
                readonly type: "string";
            };
            readonly frequency: {
                readonly description: "How often the webhook could fire.";
                readonly type: "object";
                readonly properties: {
                    readonly hour: {
                        readonly description: "The hour to potentially fire (0-23, null to potentially fire every hour)";
                        readonly minimum: 0;
                        readonly maximum: 23;
                        readonly type: "integer";
                    };
                    readonly minute: {
                        readonly description: "The minute to potentially fire (0-59, null to potentially fire every minute)";
                        readonly minimum: 0;
                        readonly maximum: 59;
                        readonly type: "integer";
                    };
                    readonly day: {
                        readonly description: "The day to potentially fire (1-31, null to potentially fire every day)";
                        readonly minimum: 1;
                        readonly maximum: 31;
                        readonly type: "integer";
                    };
                    readonly month: {
                        readonly description: "The month to potentially fire (1-12, null to potentially fire every month)";
                        readonly minimum: 1;
                        readonly maximum: 12;
                        readonly type: "integer";
                    };
                };
            };
            readonly limit: {
                readonly description: "To limit how often to potentially fire a webhook, and maximum amount of records to send";
                readonly type: "object";
                readonly properties: {
                    readonly times: {
                        readonly description: "The amount of records to send";
                        readonly type: "integer";
                    };
                    readonly seconds: {
                        readonly description: "The minimum amount of seconds between requests";
                        readonly type: "integer";
                    };
                };
            };
            readonly includeCompanyDomain: {
                readonly description: "If set to true, the company domain will be added to the header.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
        };
        readonly required: readonly ["name", "monitorFields", "postFields", "url"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is a webhook ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Add Webhook Response";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The id of the webhook.";
                    readonly type: "integer";
                    readonly examples: readonly ["4"];
                };
                readonly name: {
                    readonly description: "The name of the webhook.";
                    readonly type: "string";
                    readonly maxLength: 1024;
                    readonly examples: readonly ["Example Webhook"];
                };
                readonly created: {
                    readonly description: "timestamp of creation";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly lastSent: {
                    readonly description: "timestamp of last webhook sent";
                    readonly type: "string";
                    readonly examples: readonly ["2021-09-20 22:58:01"];
                };
                readonly monitorFields: {
                    readonly description: "A list of fields to monitor.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["firstName", "lastName"];
                };
                readonly postFields: {
                    readonly description: "A list of fields to post to the webhook url. Field ID or alias: external name";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly description: "External name to post field to";
                        readonly type: "string";
                    };
                };
                readonly url: {
                    readonly description: "The url the webhook should send data to.";
                    readonly type: "string";
                    readonly examples: readonly ["https://www.example.com"];
                };
                readonly format: {
                    readonly description: "The format the webhook should use (json, form-encoded).";
                    readonly type: "string";
                    readonly examples: readonly ["json"];
                };
                readonly frequency: {
                    readonly description: "How often the webhook could fire.";
                    readonly type: "object";
                    readonly properties: {
                        readonly hour: {
                            readonly description: "The hour to potentially fire.";
                            readonly type: "integer";
                            readonly examples: readonly [12];
                        };
                        readonly minute: {
                            readonly description: "The minute to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [56];
                        };
                        readonly day: {
                            readonly description: "The day to potentially fire";
                            readonly type: "integer";
                            readonly examples: readonly [24];
                        };
                        readonly month: {
                            readonly description: "The month to potentially fire";
                        };
                    };
                };
                readonly limit: {
                    readonly description: "To limit how often to potentially fire a webhook, and maximum amount of records to send";
                    readonly type: "object";
                    readonly properties: {
                        readonly times: {
                            readonly description: "The amount of records to send";
                            readonly type: "integer";
                            readonly examples: readonly [15];
                        };
                        readonly seconds: {
                            readonly description: "The minimum amount of seconds between requests";
                            readonly type: "integer";
                            readonly examples: readonly [500];
                        };
                    };
                };
                readonly includeCompanyDomain: {
                    readonly description: "If set to true, the company domain will be added to the header.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly title: "Webhook 403 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Invalid request body"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Permission denied to the following fields"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly title: "Webhook 404 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["No webhook was found with ID: 7."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly title: "Webhook 500 error";
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly error: {
                                readonly type: "string";
                                readonly examples: readonly ["Sorry for the inconvenience, please try again later or contact BambooHR."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RequestCustomReport: {
    readonly body: {
        readonly title: "Request Custom Report";
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly description: "";
                readonly type: "string";
            };
            readonly filters: {
                readonly description: "";
                readonly type: "object";
                readonly properties: {
                    readonly lastChanged: {
                        readonly description: "";
                        readonly type: "object";
                        readonly properties: {
                            readonly includeNull: {
                                readonly description: "yes|no";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "Date last changed";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly fields: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly description: "";
                    readonly type: "string";
                };
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The output format for the report. Supported formats: CSV, PDF, XLS, XML, JSON";
                };
                readonly onlyCurrent: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limits the report to only current employees. Setting to false will include future-dated employees in the report.";
                };
            };
            readonly required: readonly ["format"];
        }];
    };
};
declare const StoreClockEntries: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly entries: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly employeeId: {
                            readonly type: "integer";
                            readonly description: "employee id for the time entry";
                            readonly examples: readonly [40342];
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "date of the time entry";
                            readonly examples: readonly ["2021-06-25"];
                        };
                        readonly start: {
                            readonly type: "string";
                            readonly description: "24 hour format (hh:mm) for start time";
                            readonly examples: readonly ["13:00"];
                        };
                        readonly end: {
                            readonly type: "string";
                            readonly description: "24 hour format (hh:mm) for end time";
                            readonly examples: readonly ["17:00"];
                        };
                        readonly clockEntryId: {
                            readonly type: "integer";
                            readonly description: "id of existing time entry. used when updating time entry";
                            readonly examples: readonly [101];
                        };
                        readonly projectId: {
                            readonly type: "integer";
                            readonly description: "The id of the project associated with the time entry";
                            readonly examples: readonly [1];
                        };
                        readonly taskId: {
                            readonly type: "integer";
                            readonly description: "The id of the task associated with the time entry";
                            readonly examples: readonly [2];
                        };
                        readonly note: {
                            readonly type: "string";
                            readonly examples: readonly ["Note for time entry"];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const StoreDailyEntries: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly entries: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly employeeId: {
                            readonly type: "integer";
                            readonly description: "employee id for the time entry";
                            readonly examples: readonly [40342];
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "date of the time entry";
                            readonly examples: readonly ["2021-06-25"];
                        };
                        readonly hours: {
                            readonly type: "number";
                            readonly description: "The number of hours for the time entry.";
                            readonly format: "float";
                            readonly examples: readonly [7.5];
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly dailyEntryId: {
                            readonly type: "integer";
                            readonly description: "The id of the daily entry if updating an existing entry";
                            readonly examples: readonly [1];
                        };
                        readonly projectId: {
                            readonly type: "integer";
                            readonly description: "The id of the project associated with the time entry";
                            readonly examples: readonly [1];
                        };
                        readonly taskId: {
                            readonly type: "integer";
                            readonly description: "The id of the task associated with the time entry";
                            readonly examples: readonly [2];
                        };
                        readonly note: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const StoreTimesheetClockEntries: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["entries"];
        readonly properties: {
            readonly entries: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["employeeId", "date", "start", "end"];
                    readonly properties: {
                        readonly employeeId: {
                            readonly type: "integer";
                            readonly description: "Unique identifier for the employee.";
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "Date for the timesheet entry. Must be in YYYY-MM-DD format.";
                            readonly examples: readonly ["2024-01-31"];
                        };
                        readonly start: {
                            readonly type: "string";
                            readonly description: "Start time for the timesheet entry. Local time for the employee. Must be in hh:mm 24 hour format.";
                            readonly examples: readonly ["09:00"];
                        };
                        readonly end: {
                            readonly type: "string";
                            readonly description: "End time for the timesheet entry. Local time for the employee. Must be in hh:mm 24 hour format.";
                            readonly examples: readonly ["17:00"];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of an existing timesheet entry. This can be specified to edit an existing entry.";
                        };
                        readonly projectId: {
                            readonly type: "integer";
                            readonly description: "The ID of the project to associate with the timesheet entry.";
                        };
                        readonly taskId: {
                            readonly type: "integer";
                            readonly description: "The ID of the task to associate with the timesheet entry.";
                        };
                        readonly note: {
                            readonly type: "string";
                            readonly description: "Optional note to associate with the timesheet entry.";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "array";
            readonly items: {
                readonly title: "Timesheet Entry";
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly description: "ID of the entry.";
                        readonly type: "integer";
                    };
                    readonly employeeId: {
                        readonly description: "ID of the employee associated with the entry.";
                        readonly type: "integer";
                    };
                    readonly type: {
                        readonly description: "type of the entry.\n\n`hour` `clock`";
                        readonly enum: readonly ["hour", "clock"];
                        readonly type: "string";
                    };
                    readonly start: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly end: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly timezone: {
                        readonly description: "The timezone the clock entry was recorded in. Property can be null.";
                        readonly type: "string";
                    };
                    readonly hours: {
                        readonly description: "The number of hours for the entry. This value has a maximum scale of 4. Property can be null.";
                        readonly type: "number";
                    };
                    readonly note: {
                        readonly description: "The note associated with the entry. Property can be null.";
                        readonly type: "string";
                    };
                    readonly projectInfo: {
                        readonly title: "Time Tracking Project Info";
                        readonly type: "object";
                        readonly properties: {
                            readonly project: {
                                readonly title: "Time Tracking Project";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the project.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the project.";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly task: {
                                readonly title: "Time Tracking Task";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the task.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the task.";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                    readonly approved: {
                        readonly description: "Approval status of the timesheet for the entry.";
                        readonly type: "boolean";
                    };
                    readonly approvedAt: {
                        readonly description: "Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.";
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const StoreTimesheetHourEntries: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["hours"];
        readonly properties: {
            readonly hours: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["employeeId", "date", "hours"];
                    readonly properties: {
                        readonly employeeId: {
                            readonly type: "integer";
                            readonly description: "Unique identifier for the employee.";
                        };
                        readonly date: {
                            readonly type: "string";
                            readonly description: "Date for the timesheet entry. Must be in YYYY-MM-DD format.";
                            readonly examples: readonly ["2024-01-31"];
                        };
                        readonly hours: {
                            readonly type: "number";
                            readonly description: "Hours worked for this timesheet entry.";
                            readonly examples: readonly [3.5];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "The ID of an existing timesheet entry. This can be specified to edit an existing entry.";
                        };
                        readonly projectId: {
                            readonly type: "integer";
                            readonly description: "The ID of the project to associate with the timesheet entry.";
                        };
                        readonly taskId: {
                            readonly type: "integer";
                            readonly description: "The ID of the task to associate with the timesheet entry.";
                        };
                        readonly note: {
                            readonly type: "string";
                            readonly description: "Optional note to associate with the timesheet entry.";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "array";
            readonly items: {
                readonly title: "Timesheet Entry";
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly description: "ID of the entry.";
                        readonly type: "integer";
                    };
                    readonly employeeId: {
                        readonly description: "ID of the employee associated with the entry.";
                        readonly type: "integer";
                    };
                    readonly type: {
                        readonly description: "type of the entry.\n\n`hour` `clock`";
                        readonly enum: readonly ["hour", "clock"];
                        readonly type: "string";
                    };
                    readonly start: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked in. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly end: {
                        readonly description: "Timestamp, in UTC, of when the employee clocked out. ISO 8601 format. Property can be null.";
                        readonly type: "string";
                    };
                    readonly timezone: {
                        readonly description: "The timezone the clock entry was recorded in. Property can be null.";
                        readonly type: "string";
                    };
                    readonly hours: {
                        readonly description: "The number of hours for the entry. This value has a maximum scale of 4. Property can be null.";
                        readonly type: "number";
                    };
                    readonly note: {
                        readonly description: "The note associated with the entry. Property can be null.";
                        readonly type: "string";
                    };
                    readonly projectInfo: {
                        readonly title: "Time Tracking Project Info";
                        readonly type: "object";
                        readonly properties: {
                            readonly project: {
                                readonly title: "Time Tracking Project";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the project.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the project.";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly task: {
                                readonly title: "Time Tracking Task";
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "ID of the task.";
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly description: "Name of the task.";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                    readonly approved: {
                        readonly description: "Approval status of the timesheet for the entry.";
                        readonly type: "boolean";
                    };
                    readonly approvedAt: {
                        readonly description: "Timestamp, in UTC, of when the timesheet for the entry was approved. Property can be null.";
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TimeOffAddATimeOffHistoryItemForTimeOffRequest: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "The date the request should be added in history. This will usually be the first date of the request. Should be in ISO8601 date format (YYYY-MM-DD).";
                readonly type: "string";
            };
            readonly timeOffRequestId: {
                readonly description: "The ID of the time off request.";
                readonly type: "integer";
            };
            readonly note: {
                readonly description: "This is an optional note to show in history.";
                readonly type: "string";
                readonly maximum: 255;
            };
        };
        readonly required: readonly ["date", "timeOffRequestId"];
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffAddATimeOffRequest: {
    readonly body: {
        readonly title: "Add time off request";
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
            };
            readonly start: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
            };
            readonly end: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
            };
            readonly timeOffTypeId: {
                readonly description: "";
                readonly type: "integer";
            };
            readonly amount: {
                readonly description: "";
                readonly type: "integer";
            };
            readonly notes: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                        };
                        readonly note: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly dates: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly ymd: {
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly type: "integer";
                        };
                    };
                };
            };
            readonly previousRequest: {
                readonly description: "";
                readonly type: "integer";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffAdjustTimeOffBalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "The date the adjustment should be added in history. Should be in ISO8601 date format (YYYY-MM-DD).";
                readonly type: "string";
            };
            readonly timeOffTypeId: {
                readonly description: "The ID of the time off type to add a balance adjustment for.";
                readonly type: "integer";
            };
            readonly amount: {
                readonly description: "The number of hours/days to adjust the balance by.";
                readonly type: "number";
                readonly format: "float";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
            readonly note: {
                readonly description: "This is an optional note to show in history.";
                readonly type: "string";
                readonly maximum: 255;
            };
        };
        readonly required: readonly ["date", "timeOffTypeId", "amount"];
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the employee.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffAssignTimeOffPoliciesForAnEmployee: {
    readonly body: {
        readonly title: "Time Off Policies";
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly properties: {
                readonly timeOffPolicyId: {
                    readonly type: "integer";
                };
                readonly accrualStartDate: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffChangeARequestStatus: {
    readonly body: {
        readonly title: "Request Status";
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly description: "One of approved, cancelled, denied";
                readonly type: "string";
                readonly maximum: 20;
                readonly examples: readonly ["Approved"];
            };
            readonly note: {
                readonly description: "A note to attach to the change in status";
                readonly type: "string";
                readonly maximum: 255;
                readonly examples: readonly ["Note!"];
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly requestId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "requestId"];
        }];
    };
};
declare const TimeOffGetTimeOffRequests: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A particular request ID to limit the response to.";
                };
                readonly action: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit to requests that the user has a particular level of access to. Legal values are: \"view\" or \"approve\". Defaults to view.";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A particular employee ID to limit the response to.";
                };
                readonly start: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "YYYY-MM-DD. Only show time off that occurs on/after the specified start date.";
                };
                readonly end: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "YYYY-MM-DD. Only show time off that occurs on/before the specified end date.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma separated list of time off types IDs to include limit the response to. If omitted, requests of all types are included.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A comma separated list of request status values to include. If omitted, requests of all status values are included. Legal values are \"approved\", \"denied\", \"superceded\", \"requested\", \"canceled\".";
                };
            };
            readonly required: readonly ["start", "end"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Accept: {
                    readonly type: "string";
                    readonly enum: readonly ["application/xml", "application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "This endpoint can produce either JSON or XML.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const TimeOffListTimeOffPoliciesForEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffV11AssignTimeOffPoliciesForAnEmployee: {
    readonly body: {
        readonly title: "Time Off Policies";
        readonly type: "array";
        readonly items: {
            readonly type: "object";
            readonly properties: {
                readonly timeOffPolicyId: {
                    readonly type: "integer";
                };
                readonly accrualStartDate: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeOffV11ListTimeOffPoliciesForEmployee: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeTrackingEmployeeProjects: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to whom the projects belong.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
declare const TimeTrackingProjectTasks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the employee to whom the projects belong.";
                };
                readonly projectId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "id of the project to which the tasks belong.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId", "projectId"];
        }];
    };
};
declare const UpdateCompanyBenefit: {
    readonly body: {
        readonly title: "Company Benefit Request";
        readonly type: "object";
        readonly required: readonly ["companyBenefitName", "startDate", "benefitType"];
        readonly properties: {
            readonly companyBenefitName: {
                readonly description: "Name";
                readonly type: "string";
            };
            readonly benefitVendorId: {
                readonly description: "Benefit vendor ID";
                readonly type: "string";
            };
            readonly benefitType: {
                readonly description: "Benefit type";
                readonly type: "string";
                readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
            };
            readonly deductionTypeId: {
                readonly description: "Deduction type ID";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "Benefit start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly endDate: {
                readonly description: "Benefit end date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly description: {
                readonly description: "Description";
                readonly type: "string";
            };
            readonly planUrl: {
                readonly description: "Plan url";
                readonly type: "string";
            };
            readonly ssoLoginUrl: {
                readonly description: "SSO login url";
                readonly type: "string";
            };
            readonly ssoLoginUrlLinkText: {
                readonly description: "SSO login link text";
                readonly type: "string";
            };
            readonly safeHarbor: {
                readonly description: "Is a safe harbor";
                readonly type: "boolean";
            };
            readonly meetAcaMin: {
                readonly description: "Meets ACA minimum requirements";
                readonly type: "boolean";
            };
            readonly reimbursementAmount: {
                readonly description: "Reimbursement amount";
                readonly type: "number";
            };
            readonly reimbursementFrequency: {
                readonly description: "Reimbursement frequency";
                readonly type: "string";
                readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
            };
            readonly reimbursementCurrencyCode: {
                readonly description: "Reimbursement currency code";
                readonly type: "string";
            };
            readonly minEssentialCoverage: {
                readonly description: "Provides minimum essential coverage";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the company benefit ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly title: "Company Benefit";
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly description: "Name";
                    readonly type: "string";
                };
                readonly benefitVendorId: {
                    readonly description: "Benefit vendor ID";
                    readonly type: "string";
                };
                readonly benefitType: {
                    readonly description: "Benefit type\n\n`health` `dental` `vision` `retirement` `hsa` `flex` `life` `disability` `reimbursement` `supplemental` `other`";
                    readonly type: "string";
                    readonly enum: readonly ["health", "dental", "vision", "retirement", "hsa", "flex", "life", "disability", "reimbursement", "supplemental", "other"];
                };
                readonly deductionTypeId: {
                    readonly description: "Deduction type ID";
                    readonly type: "integer";
                };
                readonly startDate: {
                    readonly description: "Benefit start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Benefit end date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly description: {
                    readonly description: "Description";
                    readonly type: "string";
                };
                readonly planUrl: {
                    readonly description: "Plan url";
                    readonly type: "string";
                };
                readonly ssoLoginUrl: {
                    readonly description: "SSO login url";
                    readonly type: "string";
                };
                readonly ssoLoginUrlLinkText: {
                    readonly description: "SSO login link text";
                    readonly type: "string";
                };
                readonly safeHarbor: {
                    readonly description: "Is a safe harbor\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly meetAcaMin: {
                    readonly description: "Meets ACA minimum requirements\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
                readonly reimbursementAmount: {
                    readonly description: "Reimbursement amount";
                    readonly type: "number";
                };
                readonly reimbursementFrequency: {
                    readonly description: "Reimbursement frequency\n\n`pay period` `month` `quarter` `year` `one time`";
                    readonly type: "string";
                    readonly enum: readonly ["pay period", "month", "quarter", "year", "one time", any];
                };
                readonly minEssentialCoverage: {
                    readonly description: "Provides minimum essential coverage\n\n`yes` `no`";
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no", any];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateCompanyBenefitProperties: {
    readonly body: {
        readonly title: "Company Benefit Update Request";
        readonly type: "object";
        readonly properties: {
            readonly properties: {
                readonly description: "Property";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly enum: readonly ["endYmd", "url", "ssoLoginPrompt", "ssoLoginUrl", "externalId"];
                        };
                        readonly value: {
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the company benefit ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const UpdateCompanyFile: {
    readonly body: {
        readonly title: "Company File Update";
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "";
                readonly type: "string";
            };
            readonly categoryId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly shareWithEmployee: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the employee file being updated.";
                };
            };
            readonly required: readonly ["companyDomain", "fileId"];
        }];
    };
};
declare const UpdateEmployee: {
    readonly body: {
        readonly title: "Employee when updating";
        readonly type: "object";
        readonly properties: {
            readonly firstName: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
                readonly examples: readonly ["Panda"];
            };
            readonly lastName: {
                readonly description: "";
                readonly type: "string";
                readonly maximum: 255;
                readonly examples: readonly ["Bear"];
            };
        };
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const UpdateEmployeeDependent: {
    readonly body: {
        readonly title: "Employee Dependent";
        readonly type: "object";
        readonly properties: {
            readonly employeeId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly firstName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly middleName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly lastName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly relationship: {
                readonly description: "";
                readonly type: "string";
            };
            readonly gender: {
                readonly description: "";
                readonly type: "string";
            };
            readonly ssn: {
                readonly description: "";
                readonly type: "string";
            };
            readonly dateOfBirth: {
                readonly description: "";
                readonly type: "string";
            };
            readonly addressLine1: {
                readonly description: "";
                readonly type: "string";
            };
            readonly addressLine2: {
                readonly description: "";
                readonly type: "string";
            };
            readonly city: {
                readonly description: "";
                readonly type: "string";
            };
            readonly state: {
                readonly description: "";
                readonly type: "string";
            };
            readonly zipCode: {
                readonly description: "";
                readonly type: "string";
            };
            readonly homePhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly country: {
                readonly description: "";
                readonly type: "string";
            };
            readonly isUsCitizen: {
                readonly description: "";
                readonly type: "string";
            };
            readonly isStudent: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee dependent ID.";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const UpdateEmployeeFile: {
    readonly body: {
        readonly title: "Employee File Update";
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "";
                readonly type: "string";
            };
            readonly categoryId: {
                readonly description: "";
                readonly type: "string";
            };
            readonly shareWithEmployee: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
                readonly fileId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{fileId} is the ID of the employee file being updated.";
                };
            };
            readonly required: readonly ["companyDomain", "id", "fileId"];
        }];
    };
};
declare const UpdateEmployeeTableRow: {
    readonly body: {
        readonly title: "Table Row Update";
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "";
                readonly type: "string";
            };
            readonly location: {
                readonly description: "";
                readonly type: "string";
            };
            readonly division: {
                readonly description: "";
                readonly type: "string";
            };
            readonly department: {
                readonly description: "";
                readonly type: "string";
            };
            readonly jobTitle: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reportsTo: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Row ID";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table", "rowId"];
        }];
    };
};
declare const UpdateEmployeeTableRowV: {
    readonly body: {
        readonly title: "Table Row Update";
        readonly type: "object";
        readonly properties: {
            readonly date: {
                readonly description: "";
                readonly type: "string";
            };
            readonly location: {
                readonly description: "";
                readonly type: "string";
            };
            readonly division: {
                readonly description: "";
                readonly type: "string";
            };
            readonly department: {
                readonly description: "";
                readonly type: "string";
            };
            readonly jobTitle: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reportsTo: {
                readonly description: "";
                readonly type: "string";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is the employee ID.";
                };
                readonly table: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Table name";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Row ID";
                };
            };
            readonly required: readonly ["companyDomain", "id", "table", "rowId"];
        }];
    };
};
declare const UpdateEmployeeTrainingRecord: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["completed"];
        readonly properties: {
            readonly completed: {
                readonly description: "Completed is the only required field and must be in yyyy-mm-dd format. The other parameters are optional.";
                readonly type: "string";
                readonly pattern: "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))";
                readonly examples: readonly ["2016-05-25"];
            };
            readonly cost: {
                readonly properties: {
                    readonly currency: {
                        readonly type: "string";
                        readonly examples: readonly ["USD"];
                    };
                    readonly cost: {
                        readonly type: "number";
                    };
                };
                readonly type: "object";
            };
            readonly instructor: {
                readonly type: "string";
                readonly examples: readonly ["Bob Jones"];
            };
            readonly hours: {
                readonly type: "number";
                readonly examples: readonly ["16"];
            };
            readonly credits: {
                readonly type: "number";
                readonly examples: readonly ["4"];
            };
            readonly notes: {
                readonly type: "number";
                readonly examples: readonly ["sample note"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeTrainingRecordId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training record to update.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeTrainingRecordId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the training record.";
                    readonly type: "integer";
                };
                readonly employeeId: {
                    readonly description: "The ID of the employee associated with the training.";
                    readonly type: "integer";
                };
                readonly completed: {
                    readonly description: "Completed is a date in the format yyyy-mm-dd.";
                    readonly type: "string";
                };
                readonly notes: {
                    readonly description: "Notes left on the training record.";
                    readonly type: "string";
                };
                readonly instructor: {
                    readonly description: "Name of the instructor.";
                    readonly type: "string";
                };
                readonly credits: {
                    readonly description: "What was credited for the training record.";
                    readonly type: "number";
                };
                readonly hours: {
                    readonly description: "Hours associated with the training record.";
                    readonly type: "number";
                };
                readonly cost: {
                    readonly description: "The currency and cost for the training record.";
                    readonly type: "string";
                };
                readonly type: {
                    readonly description: "The training type ID.";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateTrainingCategory: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly description: "Name of the training category.";
                readonly type: "string";
                readonly examples: readonly ["My Training Category"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly trainingCategoryId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training category to update.";
                };
            };
            readonly required: readonly ["companyDomain", "trainingCategoryId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "The category ID and name";
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateTrainingType: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "required"];
        readonly properties: {
            readonly name: {
                readonly description: "Name of the training type.";
                readonly type: "string";
                readonly examples: readonly ["My Edited Training"];
            };
            readonly frequency: {
                readonly description: "The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.";
                readonly type: "integer";
                readonly default: "12";
                readonly examples: readonly ["12"];
            };
            readonly renewable: {
                readonly description: "Renewable is optional but if you are setting it to true you must pass a frequency.";
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
            readonly category: {
                readonly type: "object";
                readonly description: "Category is optional and passing an empty value will remove the category from the training type. Passing a name will assign the training type to the new training category.";
                readonly properties: {
                    readonly id: {
                        readonly type: "integer";
                        readonly description: "Category ID";
                        readonly examples: readonly [3];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Category Name";
                        readonly examples: readonly ["CustomApiCategoryName2"];
                    };
                    readonly accuracy: {
                        readonly type: "integer";
                        readonly description: "Accuracy in meters of the clock in location";
                        readonly examples: readonly [2];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Address...";
                        readonly examples: readonly ["123 Main"];
                    };
                };
            };
            readonly required: {
                readonly description: "Is this a required training?";
                readonly type: "boolean";
            };
            readonly dueFromHireDate: {
                readonly description: "Number of days before the training is due for new hires. Not valid unless training is required.";
                readonly type: "integer";
                readonly default: "30";
            };
            readonly linkUrl: {
                readonly description: "Optional URL that can be included with a training.";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description for the training.";
                readonly type: "string";
            };
            readonly allowEmployeesToMarkComplete: {
                readonly description: "Allows all employees who can view the training to be able to mark it complete.";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly trainingTypeId: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the training type to update.";
                };
            };
            readonly required: readonly ["companyDomain", "trainingTypeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the training";
                    readonly type: "integer";
                };
                readonly name: {
                    readonly description: "Name of the training type.";
                    readonly type: "string";
                };
                readonly renewable: {
                    readonly description: "If true, training will be renewed based off of frequency.";
                    readonly type: "boolean";
                };
                readonly frequency: {
                    readonly description: "The frequency is the (optional) amount of months between renewing trainings. Not valid if training are not renewable.";
                    readonly type: "integer";
                };
                readonly dueFromHireDate: {
                    readonly description: "Number of days before the training is due for new hires. Not valid if training is not required.";
                    readonly type: "integer";
                };
                readonly required: {
                    readonly description: "Is this a required training?";
                    readonly type: "integer";
                };
                readonly category: {
                    readonly description: "The category ID and name";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                    };
                };
                readonly linkUrl: {
                    readonly description: "Optional URL that can be included with a training.";
                    readonly type: "string";
                };
                readonly description: {
                    readonly description: "Description for the training.";
                    readonly type: "string";
                };
                readonly allowEmployeesToMarkComplete: {
                    readonly description: "Allows all employees who can view the training to be able to mark it complete.";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadCompanyFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
            };
            readonly required: readonly ["companyDomain"];
        }];
    };
};
declare const UploadEmployeeFile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "{id} is an employee ID. The special employee ID of zero (0) means to use the employee ID associated with the API key (if any).";
                };
            };
            readonly required: readonly ["companyDomain", "id"];
        }];
    };
};
declare const UploadEmployeePhoto: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly companyDomain: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The subdomain used to access BambooHR. If you access BambooHR at https://mycompany.bamboohr.com, then the companyDomain is \"mycompany\"";
                };
                readonly employeeId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID for the employee you are setting the photo for.";
                };
            };
            readonly required: readonly ["companyDomain", "employeeId"];
        }];
    };
};
export { AddBenefitGroupEmployee, AddCompanyFileCategory, AddEmployee, AddEmployeeDependent, AddEmployeeDeposit, AddEmployeeFileCategory, AddEmployeePaystub, AddEmployeeTableRow, AddEmployeeTableRowV1, AddEmployeeUnpaidPaystubs, AddEmployeeWithholding, AddHourRecord, AddNewCandidate, AddNewCompanyBenefit, AddNewEmployeeTrainingRecord, AddNewJobOpening, AddTrainingCategory, AddTrainingType, ApproveEmployeeTimesheets, BulkRecordHours, ClearEmployeeDeposit, ClearEmployeePaystub, ClearEmployeeUnpaidPaystubs, ClearEmployeeWithholding, ClockIn, ClockInData, ClockInEmployee, ClockOut, ClockOutAndApproveEmployeeTimesheets, ClockOutEmployee, ClockOutEmployeeAtSpecificTime, CreateTimeTrackingProject, DeleteClockEntries, DeleteCompanyBenefit, DeleteCompanyFile, DeleteEmployeeFile, DeleteEmployeeTableRowV1, DeleteEmployeeTrainingRecord, DeleteGoal, DeleteGoalComment, DeleteHourRecord, DeleteTimesheetClockEntries, DeleteTimesheetHourEntries, DeleteTrainingCategory, DeleteTrainingType, DeleteWebhook, EditHourRecord, EstimateFutureTimeOffBalances, GetAListOfUsers, GetAListOfWhoSOut, GetApplicationDetails, GetApplications, GetBenefitCoverages, GetBenefitDeductionTypes, GetBenefitGroupEmployees, GetBenefitGroupPlanCosts, GetBenefitGroupPlans, GetBenefitGroups, GetBenefitPlanCoverages, GetBenefitPlans, GetCanCreateGoal, GetChangedEmployeeIds, GetChangedEmployeeTableData, GetClockEntry, GetCompanyBenefit, GetCompanyBenefitTypes, GetCompanyBenefits, GetCompanyFile, GetCompanyLocations, GetCompanyReport, GetDailyEntry, GetEmployee, GetEmployeeBenefit, GetEmployeeDeductionsByPlan, GetEmployeeDependent, GetEmployeeDependents, GetEmployeeDepositAccounts, GetEmployeeFile, GetEmployeePaystub, GetEmployeePhoto, GetEmployeeProjects, GetEmployeeTableRow, GetEmployeeTimesheet, GetEmployeeUnpaidPaystubs, GetEmployeeWithholdings, GetEmployeesDirectory, GetGoalAggregate, GetGoalComments, GetGoals, GetGoalsAggregateV1, GetGoalsAggregateV11, GetGoalsAggregateV12, GetGoalsAlignmentOptions, GetGoalsFiltersV1, GetGoalsFiltersV11, GetGoalsShareOptions, GetHiringLeads, GetHourRecord, GetJobSummaries, GetMonitorFields, GetPayrollDeductionsForEmployee, GetPlanDeductionsByEmployee, GetStatuses, GetTimeOffPolicies, GetTimeOffTypes, GetTimesheetEntries, GetTimesheets, GetWebhook, GetWebhookList, GetWebhookLogs, IsEmployeeClockedIn, ListCompanyFiles, ListEmployeeFiles, ListEmployeeTrainings, ListTrainingCategories, ListTrainingTypes, Login, MetadataAddOrUpdateValuesForListFields, MetadataGetAListOfFields, MetadataGetAListOfTabularFields, MetadataGetDetailsForListFields, PostApplicantStatus, PostApplicationComment, PostCloseGoal, PostEmployeeBenefit, PostGoal, PostGoalComment, PostReopenGoal, PostWebhook, PutGoalComment, PutGoalProgress, PutGoalSharedWith, PutGoalV1, PutGoalV11, PutWebhook, RequestCustomReport, StoreClockEntries, StoreDailyEntries, StoreTimesheetClockEntries, StoreTimesheetHourEntries, TimeOffAddATimeOffHistoryItemForTimeOffRequest, TimeOffAddATimeOffRequest, TimeOffAdjustTimeOffBalance, TimeOffAssignTimeOffPoliciesForAnEmployee, TimeOffChangeARequestStatus, TimeOffGetTimeOffRequests, TimeOffListTimeOffPoliciesForEmployee, TimeOffV11AssignTimeOffPoliciesForAnEmployee, TimeOffV11ListTimeOffPoliciesForEmployee, TimeTrackingEmployeeProjects, TimeTrackingProjectTasks, UpdateCompanyBenefit, UpdateCompanyBenefitProperties, UpdateCompanyFile, UpdateEmployee, UpdateEmployeeDependent, UpdateEmployeeFile, UpdateEmployeeTableRow, UpdateEmployeeTableRowV, UpdateEmployeeTrainingRecord, UpdateTrainingCategory, UpdateTrainingType, UploadCompanyFile, UploadEmployeeFile, UploadEmployeePhoto };
