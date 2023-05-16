const SELECTORS = {
	ALERT: ".alert",
	CLOSE: "[data-alert-close]",
};

const _hideAlert = (alertElement) => {
	alertElement.classList.add("d-none");

	return true;
};

const _addEventListener = (btn, alert) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		_hideAlert(alert);
	});
};

const close = (id) => {
	const alertSelector = document.getElementById(id);

	return alertSelector
		? _hideAlert(alertSelector)
		: console.warn(
				`No alert with with id ${id} was found, make sure the attribute data-alert-close contains the correct id.`
		  );
};

const _createAlert = (alert) => {
	const externalClose = alert.id
		? document.querySelectorAll(`[data-alert-close=${alert.id}]`)
		: null;
	const internalClose = alert.querySelectorAll(SELECTORS.CLOSE);
	const closeBtns = [];

	if (externalClose && externalClose.length) {
		[...externalClose].forEach((btn) => {
			_addEventListener(btn, alert);

			closeBtns.push(btn);
		});
	}

	[...internalClose].forEach((btn) => {
		_addEventListener(btn, alert);

		closeBtns.push(btn);
	});

	return {
		container: alert,
		closeBtns: closeBtns.length
			? closeBtns.length === 1
				? closeBtns[0]
				: closeBtns
			: null,
	};
};

const init = (id) => {
	if (id) {
		const alert = document.getElementById(id);

		if (!alert) {
			console.warn(`No alert with id ${id} found`);

			return null;
		}

		return _createAlert(alert);
	} else {
		const alerts = document.querySelectorAll(SELECTORS.ALERT);

		if (!alerts.length) {
			console.warn("No alerts found");

			return null;
		}

		return [...alerts].map((alert) => _createAlert(alert));
	}
};

export default {
	init,
	close,
};
