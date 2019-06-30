import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Patent } from '../../../_Classes/Patent/patent';
export declare class TableComponent {
    private dataSourceBuilder;
    tableMap: {
        publication_number: string;
        title: string;
        applicant_str: string;
        application_date: string;
        status: string;
    };
    allColumns: string[];
    dataSource: NbTreeGridDataSource<Patent>;
    sortColumn: string;
    sortDirection: NbSortDirection;
    data: any;
    updateSort(sortRequest: NbSortRequest): void;
    getSortDirection(column: string): NbSortDirection;
    getShowOn(index: number): number;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<Patent>);
}
