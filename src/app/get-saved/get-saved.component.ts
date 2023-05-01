import { Component, OnInit } from '@angular/core';
import { GetSavedService } from '../service/get-saved.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-saved',
  templateUrl: './get-saved.component.html',
  styleUrls: ['./get-saved.component.css']
})
export class GetSavedComponent implements OnInit {
  
  ngOnInit(): void {
  }
}
