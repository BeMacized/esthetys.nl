import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { groupBy } from 'lodash';

@Component({
    selector: 'est-prijslijst',
    templateUrl: './prijslijst.component.html',
    styleUrls: ['./prijslijst.component.scss'],
})
export class PrijslijstComponent implements OnInit {
    protected priceData: any;
    protected date: any;

    constructor() {}

    ngOnInit() {
        if (typeof window === 'undefined') {
            return;
        }
        const url = '/assets/misc/Prijslijst.xlsx';
        const oReq = new XMLHttpRequest();
        oReq.open('GET', url, true);
        oReq.responseType = 'arraybuffer';
        oReq.onload = () => {
            const arraybuffer = oReq.response;
            const data = new Uint8Array(arraybuffer);
            const arr = [];
            for (let i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            const bstr = arr.join('');
            const workbook = XLSX.read(bstr, { type: 'binary' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = Object.keys(sheet)
                .filter((k) => k.substring(0, 1) !== '!')
                .map((k) => parseInt(k.replace(/[^0-9]/g, ''), 10))
                .sort((x, y) => x - y)
                .reverse()[0];
            const priceData = [];
            for (let i = 3; i <= rows; i++) {
                priceData.push({
                    categorie: sheet['A' + i]?.w,
                    naam: sheet['B' + i]?.w,
                    prijs: this.formatPrice(sheet['C' + i]?.w),
                    vanaf: sheet['D' + i]?.w === 'Y',
                    icm: sheet['E' + i]?.w === 'Y',
                });
            }
            this.priceData = Object.values(groupBy(priceData, 'categorie'));
            this.date = sheet['B1'].w;
        };
        oReq.send();
    }

    formatPrice(price: any) {
        const parsedFloat = parseFloat(price);
        if (!isNaN(parsedFloat)) {
            price = parsedFloat;
        }
        switch (typeof price) {
            case 'number':
                return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);
            case 'string':
                return price;
            default:
                return 'Incorrecte prijs';
        }
    }
}
