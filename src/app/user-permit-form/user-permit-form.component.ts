import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserPermitServiceService, County, PermitType, FormData} from '../user-permit-service.service';

@Component({
  selector: 'app-user-permit-form',
  standalone: false,
  templateUrl: './user-permit-form.component.html',
  styleUrl: './user-permit-form.component.css'
})
export class UserPermitFormComponent implements OnInit{
  userPermitForm!: FormGroup;
    counties: County[] = []; // Example county options
    permitTypes: PermitType[] = []; // Example permit type options
    successMessage: string = '';

    constructor(private fb: FormBuilder, private userPermitService: UserPermitServiceService)
    {
      this.userPermitForm = this.fb.group({
              username: ['', [Validators.required]],
              addressLine1: ['', [Validators.required]],
              addressLine2: [''],
              city: ['', [Validators.required]],
              state: ['', [Validators.required]],
              zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
              country: ['', [Validators.required]],
              countyId: ['', [Validators.required]],
              permitTypeId: ['', [Validators.required]],
            });
    }

    ngOnInit(): void {
      this.loadDropdownData();
    }

    loadDropdownData(): void {
        // Fetch counties
        this.userPermitService.getCounties().subscribe(
          (data) => {
            this.counties = data;
            console.log(data);
          },
          (error) => {
            console.error('Error fetching counties:', error);
          }
        );

        // Fetch permit types
        this.userPermitService.getPermitTypes().subscribe(
          (data) => {
            this.permitTypes = data;
            console.log(data);
          },
          (error) => {
            console.error('Error fetching permit types:', error);
          }
        );
      }

    onSubmit(): void {
      if (this.userPermitForm.valid) {
        console.log(this.userPermitForm.value);
        const formData: FormData = this.userPermitForm.value;
        this.userPermitService.submitForm(formData).subscribe(response => {
              console.log('Form submitted successfully:', response);

              alert('Form submitted successfully!');
              console.log(formData.countyId + formData.permitTypeId);
            }, error => {
              console.error('Error during form submission:', error);
              alert('Failed to submit form. Please try again.');
            });

         // Reset the form after submission
         this.userPermitForm.reset();
      } else {
        console.log('Form is not valid');
      }
    }

}
