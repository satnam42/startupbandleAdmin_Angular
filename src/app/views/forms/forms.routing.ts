import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
// import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
// import { FileUploadComponent } from './file-upload/file-upload.component';
// import { WizardComponent } from './wizard/wizard.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: BasicFormComponent,
      data: { title: 'Roles', breadcrumb: 'ROLES' }
    },
    //  {
    //   path: 'editor',
    //   component: RichTextEditorComponent,
    //   data: { title: 'Editor', breadcrumb: 'EDITOR' }
    // }, {
    //   path: 'upload',
    //   component: FileUploadComponent,
    //   data: { title: 'Upload', breadcrumb: 'UPLOAD' }
    // }, {
    //   path: 'wizard',
    //   component: WizardComponent,
    //   data: { title: 'Wizard', breadcrumb: 'WIZARD' }
    // }, 
    {
      path: 'user',
      component: UserManageComponent,
      data: { title: 'Admin', breadcrumb: 'ADMIN' }
    },
    {
      path: 'update',
      component: UpdateUserComponent,
      data: { title: 'User', breadcrumb: 'USER' }
    }]
  }
];