export class MenuState {
    state: string = '';
    constructor() {}
    setState(state: string){ this.state = state; }
    getState(): string { return this.state;}
    clearState(): void { this.state = '';}
}