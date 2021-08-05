import React from 'react';
import TextField from "@material-ui/core/TextField";
import {DropzoneArea} from 'material-ui-dropzone';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, MenuItem} from "@material-ui/core";
import categorias from '../../../Search/components/CategoryMenu/categorias'
import _ from "lodash";
import NumberField from "../../../../reuse-components/NumberField/NumberField";
import manifest from '../../../../application_manifest.json'
import {PropertyForm} from "../PropertyForm";
import {CarForm} from "../CarForm";
import {MotorcycleForm} from "../MotorcycleForm";
import {ComputersForm} from "../ComputersForm";
import {SmartphonesForm} from "../SmartphonesForm";

// https://jasonwatmore.com/post/2020/09/28/react-formik-dynamic-form-example
// https://codesandbox.io/embed/formik-example-3jfxh?fontsize=14&hidenavigation=1&theme=dark
export const AnnounceForm = ({formik}) => {


    if (!formik) {
        return null;
    }

    const getCategoryById = (id) => categorias.find((cat) => cat.id === id);

    const possuiSubCategoria = () => {
        if (formik.values && formik.values.category) {
            const cat = getCategoryById(formik.values.category)
            return cat && !_.isEmpty(cat.subcategories);
        }
        return false;
    }

    return (
        <>
            <TextField
                fullWidth
                id="title"
                name="title"
                label="Título"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
                fullWidth
                id="description"
                name="description"
                label="Descrição"
                multiline={true}
                rows={6}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
            />

            <DropzoneArea
                onChange={(files) => formik.setFieldValue("files", files)}
                dropzoneText={"Enviar fotos"}
                filesLimit={6}
            />


            <TextField
                id="category"
                select
                label="Categoria"
                value={formik.values.category}
                onChange={(e) => {
                    const category = getCategoryById(e.target.value);
                    if (category) {
                        formik.setFieldValue("subcategories", category.subcategories);
                        formik.setFieldValue("category", category.id);
                    }

                }}
                margin="normal"
                error={formik.touched.category && Boolean(formik.errors.category)}
                fullWidth
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categorias.map(categoria => (
                    <MenuItem key={categoria.name} value={categoria.id}>
                        {categoria.name}
                    </MenuItem>
                ))}
            </TextField>


            {
                possuiSubCategoria(formik.values.category) &&
                <TextField
                    id="subcategory"
                    select
                    label="subcategory"
                    value={formik.values.subcategory}
                    onChange={(e) => {
                        console.log(e.target.value)
                        formik.setFieldValue("subcategory", e.target.value)
                    }}
                    margin="normal"
                    error={formik.touched.subcategory && Boolean(formik.errors.subcategory)}
                    fullWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {formik.values.subcategories.map(categoria => (
                        <MenuItem key={categoria.label} value={categoria.code}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </TextField>

            }

            {
                formik.values.category !== 'IMOVEIS' &&
                (<NumberField
                    fullWidth
                    id="cep"
                    name="cep"
                    label="CEP"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    helperText={formik.touched.cep && formik.errors.cep}
                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                    numberFormatProps={{format: '#####-###'}}

                />)
            }

            <NumberField
                fullWidth
                id="price"
                name="price"
                label="Preço (R$) "
                value={formik.values.price}

                onChange={formik.handleChange}
                helperText={formik.touched.price && formik.errors.price}
                error={formik.touched.price && Boolean(formik.errors.price)}
                numberFormatProps={{
                    allowNegative:false,
                    decimalScale: 2,
                }}

            />

            {
                formik.values.category === 'IMOVEIS' &&
                <PropertyForm formik={formik}/>
            }
            {
                formik.values.category === 'AUTO_E_PECAS' && formik.values.subcategory === '2020' &&
                <CarForm formik={formik} />
            }

            {
                formik.values.category === 'AUTO_E_PECAS' && formik.values.subcategory === '2060' &&
                <MotorcycleForm formik={formik} />
            }
            {
                formik.values.category === 'ELETRONICOS_E_CELULARES' && formik.values.subcategory === '3040' &&
                <ComputersForm  formik={formik} />
            }

            {
                formik.values.category === 'ELETRONICOS_E_CELULARES' && formik.values.subcategory === '3060' &&
                <SmartphonesForm  formik={formik} />
            }

            <FormLabel gutterBottom variant="h5" component="h2">
                Contato: (31) 991262778
            </FormLabel>

            <FormLabel>
                * Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém entrar em
                contato ou enviar comprovante de pagamento em nome da {manifest.name}.
            </FormLabel>

            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox checked={formik.values.showContactNumber}
                                       name="hidePhone"
                                       defaultChecked={true}
                                       onChange={formik.handleChange}/>}
                    label="Ocultar meu telefone neste anúncio"
                />
            </FormGroup>
        </>
    )

}



