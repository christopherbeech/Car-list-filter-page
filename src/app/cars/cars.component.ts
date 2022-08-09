import { Component, OnInit } from "@angular/core";
// import { ICar } from "./icar";

@Component({
    selector: "pp-cars",
    templateUrl: "./cars.component.html",
    styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
    showImage: boolean = false;
    private _filterList: string = " ";

    get filterList(): string {
        return this._filterList;
    }
    set filterList(value: string) {
        this._filterList = value;
        this.filteredCars = this.setFilteredList(value);
    }



    filteredCars: any = [];
    cars = [
        {
            "carName": "Toyota Tacoma",
            "carYear": "2019",
            "carMiles": "70,000 miles",
            "carPrice": "27,000",
            "carImage": "https://cdnblob.fastly.carvana.io/2001913114/post-large/2001913114-edc-02-search.jpg?v=2022.8.9_3.15.43"
        },
        {
            "carName": "Jeep Wrangler",
            "carYear": "2021",
            "carMiles": "16,793 miles",
            "carPrice": "50,000",
            "carImage": "https://cdnblob.fastly.carvana.io/2001467838/post-large/2001467838-edc-02-search.jpg?v=2022.8.9_3.12.25"
        },
        {
            "carName": "Dodge Challenger (Scat Pack)",
            "carYear": "2021",
            "carMiles": "3,714 miles",
            "carPrice": "52,000",
            "carImage": "https://cdnblob.fastly.carvana.io/2001908338/post-large/2001908338-edc-02-search.jpg?v=2022.8.9_3.26.37"
        },
        {
            "carName": "Tesla Model 3",
            "carYear": "2018",
            "carMiles": "49,780 miles",
            "carPrice": "48,000",
            "carImage": "https://cdnblob.fastly.carvana.io/2001923837/post-large/2001923837-edc-02-search.jpg?v=2022.8.9_3.32.18"
        }
    ]

    setFilteredList(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cars.filter(car => {
            return car.carName.toLocaleLowerCase().includes(filterBy);
        })
    }
    carImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.filterList = ' ';
    }
}