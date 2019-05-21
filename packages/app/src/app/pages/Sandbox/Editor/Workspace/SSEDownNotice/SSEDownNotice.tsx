import React from 'react';
import { observer } from 'mobx-react-lite';
import getTemplate from '@codesandbox/common/lib/templates';
import { useStore } from 'app/store';
import { Container } from './elements';

export const SSEDownNotice = observer(() => {
  const store = useStore();
  const templateDef = getTemplate(store.editor.currentSandbox.template);
  if (!templateDef.isServer) {
    return null;
  }

  if (store.server.status !== 'disconnected') {
    return null;
  }

  return (
    <Container>
      <p
        style={{
          fontWeight: 700,
          color: 'white',
          fontSize: '.875rem',
          marginTop: 0,
        }}
      >
        Server Connection Trouble
      </p>
      It seems like our Server Manager is either updating or experiencing some
      heavy load. Reconnecting in a couple seconds...
      <p style={{ marginBottom: 0 }}>
        We
        {"'"}
        re working on fixing this as soon as possible. If this isn
        {"'"}t resolved with in a minute it would greatly help us if you could
        let us know on{' '}
        <a
          style={{ color: 'white' }}
          href="https://spectrum.chat/codesandbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spectrum
        </a>
        .
      </p>
    </Container>
  );
});