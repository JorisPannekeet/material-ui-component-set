(() => ({
  name: 'Text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useEndpoint, useAction } = B;
    const { linkType, linkTo, linkToExternal, actionId } = options;
    const isAction = linkType === 'action';

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[options.type || 'Body1'];

    const href = linkType === 'external' ? linkToExternal : useEndpoint(linkTo);

    const [actionCallback, { loading }] = (isAction &&
      useAction(actionId, {
        onCompleted(data) {
          B.triggerEvent('onActionSuccess', data.actionb5);
        },
        onError(error) {
          B.triggerEvent('onActionError', error.message);
        },
      })) || [() => {}, { loading: false }];

    useEffect(() => {
      if (loading) {
        B.triggerEvent('onActionLoad', loading);
      }
    }, [loading]);

    const wrapInButton = component => (
      <button
        type="button"
        onClick={actionCallback}
        className={classes.linkButton}
      >
        {component}
      </button>
    );

    const wrapInAnchor = component => (
      <a href={href} className={classes.anchor}>
        {component}
      </a>
    );

    const wrapComponent = component =>
      isAction ? wrapInButton(component) : wrapInAnchor(component);

    const Comp = (
      <Tag className={classes.content}>
        {options.content.length > 0 && <B.Text value={options.content} />}
        {options.content.length === 0 && B.env === 'dev' && (
          <span className={classes.placeholder}>Empty content</span>
        )}
      </Tag>
    );

    return linkType === 'none' ? Comp : wrapComponent(Comp);
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);
    return {
      content: {
        display: 'block',
        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),
        textAlign: ({ options: { textAlignment } }) => textAlignment,
        padding: 0,
        whiteSpace: 'pre-wrap',
        color: ({ options: { textColor } }) => style.getColor(textColor),
        fontFamily: ({ options: { type } }) => style.getFontFamily(type),
        fontSize: ({ options: { type } }) => style.getFontSize(type),
        fontWeight: ({ options: { fontWeight } }) => fontWeight,
        textTransform: ({ options: { type } }) => style.getTextTransform(type),
        letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
        [`@media ${B.mediaMinWidth(600)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Portrait'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Portrait'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Portrait'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Portrait'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Portrait'),
        },
        [`@media ${B.mediaMinWidth(960)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Landscape'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Landscape'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Landscape'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Landscape'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Landscape'),
        },
        [`@media ${B.mediaMinWidth(1280)}`]: {
          marginTop: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[0], 'Desktop'),
          marginRight: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[1], 'Desktop'),
          marginBottom: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[2], 'Desktop'),
          marginLeft: ({ options: { outerSpacing } }) =>
            getSpacing(outerSpacing[3], 'Desktop'),
          fontSize: ({ options: { type } }) =>
            style.getFontSize(type, 'Desktop'),
        },
      },
      placeholder: {
        color: '#dadde4',
      },
      anchor: {
        textDecoration: 'none',
        '&:hover, &:focus': {
          outline: 'none',
        },
      },
      linkButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'block',
        margin: 0,
        padding: 0,
        '&:hover, &:focus': {
          textDecoration: 'none',
          outline: 'none',
        },
      },
    };
  },
}))();
