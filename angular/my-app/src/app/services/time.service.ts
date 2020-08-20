export class Time {
    private tab: Array<string> = [];
    getTime(): any{
        const date: Date = new Date();
        const day: string = date.getDate().toString();
        const month: number =  1 + date.getMonth();
        const hour: string  = date.getHours().toString();
        const min: string  = date.getMinutes().toString();
        const sec = date.getSeconds().toString();

        this.tab = [day, month.toString(), hour, min, sec];
        this.tab.forEach((val, index) => {
            val.length < 2 ? this.tab[index] = '0' + val : val = val;
        });
        return this.tab;
    }
}
