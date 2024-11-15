import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Member } from '../../model/Member';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './member-page.component.html',
  styleUrl: './member-page.component.css',
})
export class MemberPageComponent {
  public memberList: Member[] = [];

  constructor(private http: HttpClient) {
    this.loadMemberTable();
  }

  loadMemberTable() {
    this.http
      .get<Member[]>('http://localhost:8080/member/view-all-members')
      .subscribe((data) => {
        data.forEach((obj) => {
          this.memberList.push(obj);
        });
      });
  }

  deleteMember(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(`http://localhost:8080/member/delete-member-by-id/${id}`)
          .subscribe((data) => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            this.loadMemberTable();
          });
      }
    });
    //----------------------
  }

  public selectedMember: any = {};

  selectMember(member: any) {
    this.selectedMember = member;
  }

  updateMember() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http
          .put(
            'http://localhost:8080/member/update-member',
            this.selectedMember
          )
          .subscribe((data) => {
            Swal.fire('Saved!', '', 'success');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
