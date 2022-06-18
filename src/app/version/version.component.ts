import { Component, OnInit } from '@angular/core';
import { VersionService } from '../version.service';
import { Version } from '../version';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})

export class VersionComponent implements OnInit {
  versions: Version[] = [];
  constructor(public service : VersionService) { }
  ngOnInit() {
   this.service.findAll().subscribe({
    next:(reponse)=>this.versions=reponse,
    error:(err)=>console.log(err)
   })
    }
  }


