<!DOCTYPE html>
<html>
	<head>
		<title>Купить мужскую одежду</title>
		<meta charset="utf-8">
	
		<?php wp_head(); ?>
	</head>
	<body>
		<div class="header">
			<div class="row">
				<div class="col-sm-3">
					<div class="time-open">
						<i class=""></i>			
					</div>
					<div class="blog">Блог</div>
					<div class="contacts">Контакты</div>
				</div>
				<div class="col-sm-6">social</div>
				<div class="col-sm-3">login</div>
			</div>
			<div class="row">
				<div class="col-sm-2">logo</div>
				<div class="col-sm-8">
					<?php
						$args = array(
							'menu' => 'header'
						);
						wp_nav_menu( $args );
					?>
				</div>
				<div class="col-sm-2">cart</div>
			</div>
			
		
		</div>
	<?php wp_footer(); ?>
	</body>
</html>