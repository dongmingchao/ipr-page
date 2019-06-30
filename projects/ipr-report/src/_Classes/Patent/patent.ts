export class Patent {
    standard_applicant_str: string;
    application_number: string;
    inventor_str: string[];
    importance_reason: string;
    patent_type: string;
    publication_number: string;
    status: string;
    tech_division: string;
    title: string;
    id: number;
    application_date: string;
    abstract_image: string;
    value: number;

    constructor(self: any) {
        Object.assign(this, self);
    }
}
