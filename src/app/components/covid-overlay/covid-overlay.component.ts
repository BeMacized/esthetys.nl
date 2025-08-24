import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

export function fadeUp(name = 'fadeUp', length = '.15s ease') {
    return trigger(name, [
        transition(':enter', [style({ opacity: 0, transform: 'translateY(44px)' }), animate(length)]),
        transition(':leave', [animate(length, style({ opacity: 0, transform: 'translateY(44px)' }))]),
    ]);
}

@Component({
    selector: 'est-covid-overlay',
    templateUrl: './covid-overlay.component.html',
    styleUrls: ['./covid-overlay.component.scss'],
    animations: [fadeUp('popup')],
    standalone: false
})
export class CovidOverlayComponent implements OnInit {
    close?: () => void;
    @HostBinding('@popup') popupAnimation = true;

    @HostListener('document:click', ['$event'])
    clickOutside($event: MouseEvent) {
        if ($event.target === this.elementRef.nativeElement) {
            $event.stopImmediatePropagation();
            this.close!();
        }
    }

    @HostListener('document:keydown.escape', ['$event'])
    onEscapeDown() {
        this.close!();
    }

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}
}
