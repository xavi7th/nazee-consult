<script>
	export let price = '$25', duration;
</script>

<div class="text-column price-tag">
	<div class="since">
		<span class="txt" class:pr-only={!duration}>
			{price}
			{#if duration}
				/ <br /> {duration}
			{/if}
		</span>
	</div>
</div>

<style lang="scss">
	.price-tag {
		position: relative;
		margin: 0;
		margin-bottom: 30px;
		font-weight: 300;
		font-size: 18px !important;
		line-height: 1.3em !important;
		letter-spacing: 0 !important;

		.since {
			position: relative;
			margin-left: 82px;
			float: none;
			margin-top: 0 !important;

			&::before {
				content: '';
				position: absolute;
				right: 13px;
				left: auto;
				top: -26px;
				width: 80px;
				height: 80px;
				border-radius: 50%;
				background: #e8e9e9;
			}

			&::after {
				content: '';
				position: absolute;
				left: -42px;
				bottom: 0;
				right: 100px;
				top: -32px;
				left: auto;
				height: 110px;
				border-left: 2px solid var(--thm-base);
			}

			.txt {
        display: flex;
        justify-content: center;
        align-items: center;
				position: absolute;
				right: 0;
				top: -22px;
				width: 90px;
				height: 90px;
				padding: 21px 5px;
				border-radius: 50%;
				line-height: 24px;
				text-align: center;
				text-transform: uppercase;
				font-family: var(--thm-b-font);
				color: #ffffff;
				background: var(--thm-black);

				&.pr-only {
					font-size: x-large;
				}
			}

			@media (max-width: 575px) {
				&::before {
					top: -25px;
					right: 13px;
				}

				&::after {
					top: -25px;
					right: 100px;
				}

				.txt {
					top: -20px;
					right: 0;
				}
			}

			@media (max-width: 435px) {
				&::before {
					top: -15px;
					right: 15px;
				}

				&::after {
					top: -25px;
					right: 100px;
				}

				.txt {
					top: -15px;
					right: 0;
				}
			}

			@media (max-width: 435px) and (-webkit-min-device-pixel-ratio: 2) {
				.ios & {
					&::before {
						right: 13px;
						top: -18px;
					}

					&::after {
						right: 100px;
						top: -25px;
					}

					.txt {
						right: 0;
						top: -15px;
					}
				}
			}
		}
	}
</style>
