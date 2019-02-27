import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-left-pane-info',
    templateUrl: './left-pane-info.component.html',
    styleUrls: ['./left-pane-info.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush // using this code for stop multiple time execution of functions.
})
export class LeftPaneInfoComponent implements OnInit {

    userImgPath: string;
    userName: string;
    nodeLinks = [{
        label: "New Bookings",
        value: 1,
        isActive: true
    }, {
        label: "History",
        value: 2,
        isActive: false
    }, {
        label: "Help",
        value: 3,
        isActive: false
    }, {
        label: "Payment",
        value: 4,
        isActive: false
    }, {
        label: "Free Services",
        value: 5,
        isActive: false
    }, {
        label: "Settings",
        value: 6,
        isActive: false
        }, {
            label: "Logout",
            value: 7,
            isActive: false
        }];
    constructor() {

        this.userImgPath = '/assets/images/user-icon.png';
        this.userName = 'Hament Aggarwal';

    }

    ngOnInit() {
    }

    showUserName() {
        let user = this.userName;
        if (user.indexOf(" ") > -1) {
            let nameArr = user.split(" ");
            // console.log(nameArr.length, nameArr.length == 2)
            if (nameArr.length == 2) {
                for (let name in nameArr) {
                    if (name == '0') {
                        user = '<strong>' + nameArr[name] + '</strong> ';
                    } else {
                        user += nameArr[name];
                    }
                }
            }
            //  console.log(nameArr[name],name);
        } else {
            console.log("Error")
        }
        return user;
    }

}
