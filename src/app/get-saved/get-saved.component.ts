import { Component, OnInit } from '@angular/core';
import { GetSavedService } from '../service/get-saved.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-saved',
  templateUrl: './get-saved.component.html',
  styleUrls: ['./get-saved.component.css']
})
export class GetSavedComponent implements OnInit {

  retrievedId  = -50;

  constructor(private route: ActivatedRoute,
    private router: Router, private getSavedService: GetSavedService) { }

  ngOnInit(): void {
    this.getSavedService.executeGetSavedPostsService().subscribe((result) => {
      this.retrievedId = result.id;
    });
  }

}
