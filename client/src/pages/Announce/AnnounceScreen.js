import React from 'react';
import styles from './AnnounceStyles';
import {withRouter} from "react-router-dom";
import {AnnounceForm} from "./components/AnnounceForm/AnnounceForm";
import AnnounceFormFieldsSpecifications
    from "./components/AnnounceForm/AnnounceFormFieldsSpecifications";
import {GenericForm} from "../../reuse-components/GenericForm";


function AnnounceScreen() {
    return (
      <div style={styles.container}>

          <GenericForm
              renderForm={(formik) => (<AnnounceForm formik={formik}/>)}
              FormFieldsSpecifications={AnnounceFormFieldsSpecifications}
              submitButtonProps={{name: 'Enviar'}}
              onSubmit={(params) => console.log(params)}
          />
      </div>
    );
  }


export default withRouter(AnnounceScreen);
