import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ControlValueAccessor, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent implements OnInit, ControlValueAccessor {

  constructor(private http: HttpClient) {
  }

  @Output() uploadEvent : EventEmitter<File> = new EventEmitter<File>();
  uploadForm: FormGroup = new FormGroup({});

  selectedFile: File = new File([], '');
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = '';
  imageName: any;

  ngOnInit(): void {
  }

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    console.log('upload component -> onFileChanged -> eventValue :', event);
    this.selectedFile = event.target.files[0];
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log('upload component -> uploadImageData  :', event.target.files[0]);

    this.uploadEvent.emit(event.target.files[0]);
  }

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(obj: any): void {
    console.log('uplod component -> write value : ', obj);
  }

  registerOnChange(fn: any): void {
    console.log('upload component -> onchange -> fn value :', fn);
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    console.log('upload component -> ontouch -> fn value :', fn);
    this.onTouch = fn;
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  }

  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
