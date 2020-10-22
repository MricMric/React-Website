import React from 'react';
import '../App.css';
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    MaskedInput,
    Heading,
    TextArea,
    TextInput,
  } from 'grommet';

function Formulaire() {

    const passwordRulesStrong = [
        {
          regexp: new RegExp('(?=.*?[A-Z])'),
          message: 'One uppercase letter',
          status: 'error',
        },
        {
          regexp: new RegExp('(?=.*?[a-z])'),
          message: 'One lowercase letter',
          status: 'error',
        },
        {
          regexp: new RegExp('(?=.*?[#?!@$ %^&*-])'),
          message: 'One special character',
          status: 'error',
        },
        {
          regexp: new RegExp('.{8,}'),
          message: 'At least 8 characters',
          status: 'error',
        },
      ];

    return (    
      <Grommet>
        <Box fill align="center" justify="center">
        <Heading margin="xlarge" textAlign="center">Contacter</Heading>
          <Box width="medium">
            <Form
              onReset={event => console.log(event)}
              onSubmit={({ value }) => console.log('Submit', value)}
              onValidate={({ errors, infos }) =>
                console.log('Validate', errors, infos)
              }
            >
              <FormField label="Name" name="name" required>
                <TextInput name="name" />
              </FormField>
              <FormField label="Email" name="email" required>
                <MaskedInput
                  name="email"
                  mask={[
                    { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                    { fixed: '@' },
                    { regexp: /^[\w]+$/, placeholder: 'my' },
                    { fixed: '.' },
                    { regexp: /^[\w]+$/, placeholder: 'com' },
                  ]}
                />
              </FormField>
              <FormField label="Comments" name="comments">
                <TextArea name="comments" />
              </FormField>
              <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                <Button type="reset" label="Annuler" />
                <Button type="submit" label="Envoyer" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
  
  export default Formulaire;
  