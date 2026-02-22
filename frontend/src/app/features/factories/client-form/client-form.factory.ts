import { FormBuilder, Validators } from "@angular/forms";
import { Formclients } from "../../../core/models/clientformmodel/formclient.model";



export function createClientForm(
  fb: FormBuilder,
  initialData?: Partial<Formclients>
) {
  return fb.nonNullable.group({
    name: [initialData?.name ?? '', [Validators.required, Validators.minLength(3)]],
    email: [initialData?.email ?? '', [Validators.required, Validators.email]],
    cpf: [initialData?.cpf ?? '', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    phone: [initialData?.phone ?? '', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    status: [initialData?.status ?? '', [Validators.required]]
  });
}