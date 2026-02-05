import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-identity',
  imports: [CommonModule, DatePipe],
  templateUrl: './identity.html',
  styles: [
    `:host { display:block; border:1px solid #e0e0e0; padding:12px; border-radius:6px; max-width:360px; background:#fafafa; }
    h3 { margin:0 0 8px 0; font-size:1.1rem; color:#222; }
    p { margin:4px 0; color:#444; }
    img { max-width:100%; height:auto; display:block; margin-top:8px; border-radius:4px; }
    button.toggle { margin-top:8px; padding:6px 10px; cursor:pointer; background:#1976d2; color:#fff; border:none; border-radius:4px; }
    button.calc { margin-top:8px; padding:6px 10px; margin-left:8px; cursor:pointer; background:#4caf50; color:#fff; border:none; border-radius:4px; }
    `
  ]
})
export class Identity {
  person1 = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: new Date('1990-01-01'),
    numberOfChildren: 2,
    isIsraeli: false,
    imgUrl: '/images/1.jpg'
  };

  age: number | null = null;
  imageHidden: boolean = false;

  calculateAge(birthDate: Date) {
    const today = new Date();
    const b = new Date(birthDate);
    let age = today.getFullYear() - b.getFullYear();
    const monthDifference = today.getMonth() - b.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < b.getDate())) {
      age--;
    }
    this.age = age;
    return age;
  }

  toggleImage() {
    this.imageHidden = !this.imageHidden;
  }

  get toggleButtonText() {
    return this.imageHidden ? 'הצג תמונה' : 'הסתר תמונה';
  }
}