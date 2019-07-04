import { Catalog } from '../_Classes/Catalog.class';
import { InjectionToken } from '@angular/core';
export interface BackendService {
    get_catelog(id: number, degree: number): Promise<Catalog[]>;
    get_content(id: number, child_content: string): Promise<Catalog>;
}
export declare const IprReportBackend: InjectionToken<BackendService>;
